// Cloudflare Pages Function: Fetch Google Place Details & return trimmed reviews
// Expects env: GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID
export interface Env {
  GOOGLE_PLACES_API_KEY: string;
  GOOGLE_PLACE_ID: string;
}

// Minimal type hint if @cloudflare/workers-types not installed
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PagesFunction<E = unknown> = (context: { request: Request; env: E; waitUntil(p: Promise<any>): void }) => Promise<Response> | Response;

const CACHE_TTL = 60 * 30; // 30 minutes

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = context.env;
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    return new Response(JSON.stringify({ error: 'Missing configuration' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  const cacheKey = `reviews-${GOOGLE_PLACE_ID}`;
  try {
    const cacheStorage = (globalThis as any).caches as CacheStorage | undefined;
    if (cacheStorage) {
      const match = await cacheStorage.match(cacheKey as any);
      if (match) {
        return new Response(await match.text(), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' } });
      }
    }
  } catch {}

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(GOOGLE_PLACE_ID)}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${GOOGLE_PLACES_API_KEY}`;
  const apiRes = await fetch(url);
  if (!apiRes.ok) {
    return new Response(JSON.stringify({ error: 'Upstream error' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
  }
  const json = await apiRes.json();
  const result = json.result || {};
  const payload = {
    name: result.name,
    rating: result.rating,
    total: result.user_ratings_total,
    reviews: (result.reviews || []).slice(0, 6).map((r: any) => ({
      author: r.author_name,
      text: r.text,
      rating: r.rating,
      time: r.relative_time_description,
      profilePhoto: r.profile_photo_url
    }))
  };

  const body = JSON.stringify(payload);
  const response = new Response(body, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=600'
    }
  });
  response.headers.set('Access-Control-Allow-Origin', '*');

  try {
  // Skip write caching (Cache API typing not available without workers types). Could integrate KV later.
  context.waitUntil(Promise.resolve());
  } catch {}

  return response;
};
