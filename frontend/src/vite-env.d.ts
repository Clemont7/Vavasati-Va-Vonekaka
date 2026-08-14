/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_WHATSAPP: string;
  readonly VITE_FACEBOOK_URL: string;
  readonly VITE_INSTAGRAM_URL: string;
  readonly VITE_YOUTUBE_URL: string;
  readonly VITE_ENABLE_NEWSLETTER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
