export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = process.env;
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return res.status(500).json({ error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID' });
  }
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(GOOGLE_PLACE_ID)}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${GOOGLE_PLACES_API_KEY}`;
    const upstream = await fetch(url);
    if (!upstream.ok) {
      return res.status(502).json({ error: 'Upstream error' });
    }
    const json = await upstream.json();
    const result = json.result || {};
    const payload = {
      name: result.name,
      rating: result.rating,
      total: result.user_ratings_total,
      reviews: (result.reviews || []).slice(0, 6).map(r => ({
        author: r.author_name,
        text: r.text,
        rating: r.rating,
        time: r.relative_time_description,
        profilePhoto: r.profile_photo_url
      }))
    };
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json(payload);
  } catch (e) {
    return res.status(500).json({ error: 'Server error', detail: e?.message });
  }
}