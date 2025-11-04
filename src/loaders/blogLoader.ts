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

      const localEntries = store
        .entries()
        .map(([id, entry]) => entry)
        .filter((entry) => entry.rendered?.metadata?.frontmatter?.draft !== true);

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

        const localVersion = localEntries.find((entry) => entry.rendered?.metadata?.frontmatter?.devtoUrl === blog.url);
        if (localVersion) {
          // This blog has been copied locally. Do not show the Dev.to version, but do copy the cover image
          localVersion.data.image = blog.cover_image;
          logger.info(`Found blog post ${blog.id} locally (${localVersion.id})! Skipping dev.to...`);
          continue;
        }

        blogEntries.push({
          id: blog.slug,
          data: {
            title: blog.title,
            description: blog.description,
            external_image: blog.cover_image,
            author: firstName,
            timestamp: blog.published_timestamp,
            url: blog.url,
            type: 'Blog',
          },
          body,
          rendered: {
            html,
          },
        });

        await delay(500);
      }

      const entries = [...localEntries, ...blogEntries].sort(
        (a, b) => new Date(b.data.timestamp as string).getTime() - new Date(a.data.timestamp as string).getTime()
      );

      store.clear();

      for (const entry of entries) {
        const id = entry.id;
        const isLocalEntry = Boolean((entry as { filePath?: string }).filePath);

        const entryData = isLocalEntry
          ? entry.data
          : await parseData({
              id,
              data: entry.data,
            });

        console.log(id.split('/').pop());

        store.set({
          id,
          data: { ...entryData, slug: id.split('/').pop() },
          body: entry.body,
          rendered: entry.rendered,
          // @ts-ignore Preserve original metadata managed by Astro
          deferredRender: entry.deferredRender,
          // @ts-ignore Existing local content keeps its original file path
          filePath: entry.filePath,
          // @ts-ignore Retain digest when present
          digest: entry.digest,
          // @ts-ignore Ensure we keep the asset imports discovered by Astro
          assetImports: entry.assetImports,
        });
      }
    },
    schema: async () =>
      z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string().nullable().optional(),
        social_image: z.string().nullable().optional(),
        external_image: z.string().nullable().optional(),
        author: z.string(),
        timestamp: z.string(),
        url: z.string().optional(),
        type: z.string().optional(),
        hightlight: z.boolean().optional(),
      }),
  };
}
