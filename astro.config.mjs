import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';
import astroLLMsGenerator from 'astro-llms-generate';
import { defineConfig, envField, fontProviders } from 'astro/config';
import llmsTxtReplacer from './buildUtils/llmsTxtReplacer';
import { diploiDescription } from './buildUtils/seoVariables';

// https://astro.build/config
export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  output: 'static',
  site: 'https://diploi.com',
  trailingSlash: 'never',
  env: {
    schema: {
      VITE_API_URL: envField.string({ context: 'client', access: 'public', optional: false }),
      VITE_CALENDLY_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      API_KEY: envField.string({ context: 'server', access: 'secret', optional: false }),
      DEVTO_API_KEY: envField.string({ context: 'server', access: 'secret', optional: false }),
    },
  },
  image: {
    domains: ['media2.dev.to', 'dev.to', 'diploi.b-cdn.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dev.to',
      },
    ],
  },
  integrations: [
    astroLLMsGenerator({
      description: diploiDescription,
    }),
    llmsTxtReplacer(),
    react({
      include: ['**/react/*'],
    }),
    sitemap({
      customPages: ['https://diploi.com/llms.txt', 'https://diploi.com/llms-small.txt', 'https://diploi.com/llms-full.txt'],
      filter: (page) => {
        if (page.endsWith('/louhi')) return false;
        return true;
      },
    }),
    mdx(),
    sentry({
      sourceMapsUploadOptions: {
        project: 'website',
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
      telemetry: false,
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-header',
      weights: ['600 800'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-body',
      weights: ['200 900'],
    },
  ],
  vite: {
    server: {
      allowedHosts: ['.diploi.app', '.diploi.me'],
    },
  },
  redirects: {
    '/survey': 'https://c8t6ztfj4ah.typeform.com/to/nblWkc7m',
    '/yaml': 'https://docs.diploi.com/reference/diploi-yaml',
    '/dev': 'https://docs.diploi.com/building/remote-development',
    '/ci': 'https://docs.diploi.com/reference/github-action',
    '/launch': '/',
    '/deploy': '/',
    '/in': { destination: '/?utm=in', status: 302 },
    '/launch/astro': '/component/astro',
    '/launch/next': '/component/next',
    '/launch/sveltekit': '/component/sveltekit',
    '/ai': '/features/ai',
    '/devops': '/features/devops',
    '/blog/importing_from_lovable': '/blog/importing_from_lovable_and_github',
    '/blog/hosting_react_apps/hosting_react_apps': '/blog/hosting_react_apps',
    '/alternative/railway': '/alternative/to-railway',
    '/alternative/vercel': '/alternative/to-vercel',
    '/alternative/render': '/alternative/to-render',
    '/blog/recap_2025/recap_2025': '/blog/recap_2025',
    '/blog/our_first_press_release/our_first_press_release': '/blog/our_first_press_release',
    '/blog/using_cursor_with_lovable_apps_and_how_to_deploy/exporting_from_lovable_to_cursor': '/blog/exporting_from_lovable_to_cursor',
    '/blog/how_to_generate_ssh_keys_using_ssh-keygen/how_to_generate_ssh_keys_using_ssh-keygen':
      '/blog/how_to_generate_ssh_keys_using_ssh-keygen',
    '/blog/hosting_bun_apps/hosting_bun_apps': '/blog/hosting_bun_apps',
    '/blog/hosting_laravel_apps/hosting_laravel_apps': '/blog/hosting_laravel_apps',
    '/blog/exploring-7-lesser-known-ai-coding-extensions/exploring-7-lesser-known-ai-coding-extensions':
      '/blog/exploring-7-lesser-known-ai-coding-extensions',
    '/blog/hosting_supabase/hosting_supabase': '/blog/hosting_supabase',
  },
});
