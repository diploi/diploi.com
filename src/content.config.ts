import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';
import { componentLoader } from './loaders/componentLoader';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      author: z.string(),
      timestamp: z.string(),
    }),
});

const componentCollection = defineCollection({
  loader: componentLoader({
    apiUrl: import.meta.env.VITE_API_URL,
    apiKey: import.meta.env.API_TOKEN,
  }),
});

export const collections = {
  blog: blogCollection,
  component: componentCollection,
};
