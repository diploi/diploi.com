import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

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

const legalCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/legal' }),
  schema: z.object({
      title:z.string(),
      description: z.string(),
      timestamp: z.string(),
    })
})

export const collections = {
  blog: blogCollection,
  legal: legalCollection
};
