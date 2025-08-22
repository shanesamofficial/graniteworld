import type { Handler } from "@netlify/functions";

// Serverless function to fetch Google Place Details (reviews subset) securely.
// Requires environment variables (set in Netlify dashboard):
//   GOOGLE_PLACES_API_KEY  (Server-side only, DO NOT expose publicly)
//   GOOGLE_PLACE_ID        (Optional if client supplies placeId)

const GOOGLE_API = "https://maps.googleapis.com/maps/api/place/details/json";

export const handler: Handler = async (event) => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "Missing server API key" }) };
  }
  const query = event.queryStringParameters || {};
  const placeId = query.placeId || process.env.GOOGLE_PLACE_ID;
  if (!placeId) {
    return { statusCode: 400, body: JSON.stringify({ error: "placeId required" }) };
  }
  try {
    const url = new URL(GOOGLE_API);
    url.searchParams.set("place_id", placeId as string);
    url.searchParams.set("fields", "name,rating,user_ratings_total,reviews");
    url.searchParams.set("language", "en");
    url.searchParams.set("key", apiKey);

    const resp = await fetch(url.toString());
    const data = await resp.json();
    if (data.status !== "OK") {
      return { statusCode: 502, body: JSON.stringify({ error: data.status, message: data.error_message }) };
    }
    // Trim / normalize review payload
    const reviews = (data.result.reviews || []).map((r: any) => ({
      author: r.author_name,
      text: r.text,
      rating: r.rating,
      time: r.relative_time_description,
      profilePhoto: r.profile_photo_url,
    }));
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=900' },
      body: JSON.stringify({
        name: data.result.name,
        rating: data.result.rating,
        total: data.result.user_ratings_total,
        reviews,
      })
    };
  } catch (e: any) {
    return { statusCode: 500, body: JSON.stringify({ error: 'FETCH_FAILED', message: e.message }) };
  }
};
