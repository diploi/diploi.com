import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import { shikiTheme } from './src/shiki-theme'

// https://astro.build/config
export default defineConfig({
  site: 'https://diploi.com',
  trailingSlash: 'never',
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    sitemap(),
    mdx(),
  ],
  vite: {
    ssr: {
      // Tells Astro/Vite to bundle the CJS bits of react-responsive-masonry
      // instead of trying to load them as native ESM
      noExternal: ['react-responsive-masonry'],
    },
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      wrap: true,
      theme: shikiTheme,
    },
  },
})
