/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENDPOINT: string
  readonly VITE_API_KEY: string
  readonly VITE_AUTH_DOMAIN: string
  readonly VITE_PROJECT_ID: string
  readonly VITE_STORAGE_BUCKET: string
  readonly VITE_MESSAGING_SENDER_ID: string
  readonly VITE_APP_ID: string
  readonly VITE_MESSUREMENT_ID: string
  readonly VITE_ALGOLIA_APP_ID: string
  readonly VITE_ALGOLIA_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>
  const src: string
  export default src
}
