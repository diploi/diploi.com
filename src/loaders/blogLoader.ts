import { type Loader, glob } from 'astro/loaders';
import { z } from 'astro:content';
import DOMPurify from 'isomorphic-dompurify';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function blogLoader({ apiKey }: { apiKey: string }): Loader {
  return {
    name: 'blog-loader',
    load: async (context) => {
      const { store, logger, parseData, meta, generateDigest } = context;

      // Load local blogs into the store
      await glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }).load(context);

      const localEntries = store.entries().map(([id, entry]) => entry);

      // FIXME: Pagination!
      const blogsResponse = await fetch(`https://dev.to/api/articles?username=diploi&state=all&page=1&per_page=20`, {
        headers: {
          'api-key': apiKey,
        },
      }).then((response) => response.json());
      if (!blogsResponse) {
        throw new Error(`Failed to Dev.to articles (${blogsResponse})`);
      }

      const blogs = blogsResponse as {
        id: number;
        slug: string;
        url: string;
        title: string;
        description: string;
        cover_image: string | null;
        published_timestamp: string;
        user: { name: string };
      }[];

      let blogEntries = [];
      for (const blog of blogs) {
        logger.info(`Fetching blog post ${blog.id} from dev.to...`);

        const content = await fetch(`https://dev.to/api/articles/${blog.id}`, {
          headers: {
            'api-key': apiKey,
          },
        }).then((response) => response.json());

        const body = content.body_markdown;
        const html = DOMPurify.sanitize(content.body_html);

        const firstName = (blog.user.name || '').split(' ')[0];

        blogEntries.push({
          id: blog.slug,
          data: {
            title: blog.title,
            description: blog.description,
            image: blog.cover_image,
            author: firstName,
            timestamp: blog.published_timestamp,
            url: blog.url,
          },
          body,
          rendered: {
            html,
          },
        });

        await delay(1000);
      }

      const entries = [...localEntries, ...blogEntries].sort(
        (a, b) => new Date(b.data.timestamp as string).getTime() - new Date(a.data.timestamp as string).getTime()
      );

      store.clear();

      for (const entry of entries) {
        const entryData = await parseData({
          id: entry.id,
          data: entry.data,
        });

        store.set({
          id: entry.id,
          data: entryData,
          body: entry.body,
          rendered: entry.rendered,
          //@ts-ignore
          deferredRender: entry.deferredRender,
          //@ts-ignore
          filePath: entry.filePath,
          //@ts-ignore
          digest: entry.digest,
        });
      }
    },
    schema: async () =>
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().nullable().optional(),
        author: z.string(),
        timestamp: z.string(),
        url: z.string().optional(),
      }),
  };
}
