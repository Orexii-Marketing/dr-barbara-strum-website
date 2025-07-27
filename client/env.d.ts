/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_AMAZON_AFFILIATE_TAG: string;
  readonly VITE_GOOGLE_ADS_CONVERSION_ID: string;
  readonly VITE_GOOGLE_ADS_CONVERSION_LABEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}