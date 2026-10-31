import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type IndexHtmlTransformContext} from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const verificationTags = [
    env.VITE_GOOGLE_SITE_VERIFICATION && `<meta name="google-site-verification" content="${env.VITE_GOOGLE_SITE_VERIFICATION}" />`,
    env.VITE_BING_SITE_VERIFICATION && `<meta name="msvalidate.01" content="${env.VITE_BING_SITE_VERIFICATION}" />`,
    env.VITE_FACEBOOK_APP_ID && `<meta property="fb:app_id" content="${env.VITE_FACEBOOK_APP_ID}" />`,
  ].filter(Boolean).join('\n    ');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inject-search-verification',
        transformIndexHtml(html: string, _ctx: IndexHtmlTransformContext) {
          return verificationTags ? html.replace('</head>', `    ${verificationTags}\n  </head>`) : html;
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR can be disabled via DISABLE_HMR when needed.
      // File watching is disabled in this mode to reduce unnecessary reloads.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
