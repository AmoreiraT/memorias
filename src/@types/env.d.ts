/// <reference types="vite/client.d.ts" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_BASE_URL_DEV: string;
  readonly VITE_MUI_LICENSE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
