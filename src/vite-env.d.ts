/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_PLACE_ID?: string;
  readonly VITE_REVIEWS_ENDPOINT?: string;
  // readonly VITE_GOOGLE_API_KEY?: string; // (avoid exposing unrestricted key)
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
