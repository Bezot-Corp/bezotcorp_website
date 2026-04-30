// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      {
        name: 'exclude-blog-pages',
        enforce: 'pre',
        resolveId(source) {
          if (source.includes('src/pages/fr-fr/blog') || source.includes('src/content/blog')) {
            return false;
          }
          return null;
        },
      },
    ],
  },
});
