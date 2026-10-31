/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly VITE_BING_UET_TAG_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
