import type { Loader } from 'astro/loaders';
import { z } from 'astro:content';
import DOMPurify from 'isomorphic-dompurify';
import { parseRepositoryUrl } from '../utils/apiUtils';

const componentTypeIDToString = {
  1: 'component',
  2: 'addon',
  3: 'starter',
};

const DEFAULT_REPOSITORY_REF = 'main';

type ParsedRepository = ReturnType<typeof parseRepositoryUrl>;
type ValidParsedRepository = Extract<ParsedRepository, { status: 'ok' }>;

type RepositoryLinkContext = {
  blobBaseUrl: string;
  rawBaseUrl: string;
};

const ABSOLUTE_PROTOCOL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;

const toTrailingSlashSubpath = (subpath?: string) => {
  if (!subpath) return '';
  const cleaned = subpath.replace(/^\/+/, '').replace(/\/+$/, '');
  return cleaned.length > 0 ? `${cleaned}/` : '';
};

const createRepositoryLinkContext = (parsed: ValidParsedRepository): RepositoryLinkContext => {
  const ref = parsed.ref ?? DEFAULT_REPOSITORY_REF;
  const subpathSegment = toTrailingSlashSubpath(parsed.subpath);
  return {
    blobBaseUrl: `https://github.com/${parsed.owner}/${parsed.repo}/blob/${ref}/${subpathSegment}`,
    rawBaseUrl: `https://raw.githubusercontent.com/${parsed.owner}/${parsed.repo}/${ref}/${subpathSegment}`,
  };
};

const isRelativeUrl = (value?: string | null) => {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('#')) return false;
  if (trimmed.startsWith('//')) return false;
  return !ABSOLUTE_PROTOCOL_REGEX.test(trimmed);
};

const resolveUrlAgainstBase = (value: string, base: string) => {
  try {
    return new URL(value, base).toString();
  } catch {
    return undefined;
  }
};

let currentRepositoryLinkContext: RepositoryLinkContext | undefined;

const sanitizeReadmeHtml = (html: string, context?: RepositoryLinkContext) => {
  if (!context) {
    return DOMPurify.sanitize(html);
  }

  currentRepositoryLinkContext = context;
  try {
    return DOMPurify.sanitize(html);
  } finally {
    currentRepositoryLinkContext = undefined;
  }
};

// Rewrite relative README links and images to point back to GitHub
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (!currentRepositoryLinkContext) return;
  const tagName = typeof node.tagName === 'string' ? node.tagName.toLowerCase() : '';

  if (tagName === 'a') {
    const href = node.getAttribute('href');
    if (href && isRelativeUrl(href)) {
      const resolved = resolveUrlAgainstBase(href.trim(), currentRepositoryLinkContext.blobBaseUrl);
      if (resolved) {
        node.setAttribute('href', resolved);
      }
    }
  } else if (tagName === 'img') {
    const src = node.getAttribute('src');
    if (src && isRelativeUrl(src)) {
      const resolved = resolveUrlAgainstBase(src.trim(), currentRepositoryLinkContext.rawBaseUrl);
      if (resolved) {
        node.setAttribute('src', resolved);
      }
    }
  }
});

// Remove component icon from README.md
DOMPurify.addHook('uponSanitizeElement', function (node, data) {
  if (data.tagName === 'img') {
    const attributes = (node as any).attributes as NamedNodeMap;
    if ('src' in attributes) {
      const src = attributes.getNamedItem('src')?.textContent;
      if (src === '.diploi/icon.svg' && node.parentNode) {
        return node.parentNode.removeChild(node);
      }
    }
  }
});

// Remove component badges from README.md
DOMPurify.addHook('uponSanitizeElement', function (node, data) {
  if (data.tagName === 'img') {
    const attributes = (node as any).attributes as NamedNodeMap;
    if ('src' in attributes) {
      const src = attributes.getNamedItem('src')?.textContent || '';
      const isBadge =
        src === 'https://diploi.com/launch.svg' || src === 'https://diploi.com/component.svg' || src.startsWith('https://badgen.net');
      if (isBadge && node.parentNode) {
        if (node.parentElement?.tagName === 'A' && node.parentNode.parentNode) {
          return node.parentNode.parentNode.removeChild(node.parentNode);
        } else {
          return node.parentNode.removeChild(node);
        }
      }
    }
  }
});

export function componentLoader({ apiUrl, apiKey }: { apiUrl: string; apiKey: string }): Loader {
  return {
    name: 'component-loader',
    load: async ({ store, logger, parseData, meta, generateDigest, renderMarkdown }) => {
      logger.info(`Loading a list of components from "${apiUrl}"...`);

      const {
        result: { data },
      } = await fetch(`${apiUrl}/api/trpc/stack.listPreviewComponents`).then((response) => response.json());
      if (!data || data.status !== 'ok') {
        throw new Error(`Failed to load component paths (${JSON.stringify(data)})`);
      }

      const components = data.components as {
        type: 'component' | 'addon';
        identifier: string;
      }[];

      logger.info(`Found ${data.components.length} components!`);

      store.clear();

      for (const component of components) {
        logger.info(`Loading data for the "${component.identifier}" component...`);

        const {
          result: { data },
        } = await fetch(`${apiUrl}/api/trpc/stack.loadComponent`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: apiKey, identifier: component.identifier }),
        }).then((response) => response.json());
        if (!data || data.status !== 'ok') {
          throw new Error(`Failed to load component (${data})`);
        }

        const entry = data.component as {
          componentTypeID: number;
          identifier: string;
          readme: string;
          icon: string;
          previewImageUrls?: string[];
          url: string;
        };

        const repositoryDetails = parseRepositoryUrl(entry.url);
        const repositoryLinkContext = repositoryDetails.status === 'ok' ? createRepositoryLinkContext(repositoryDetails) : undefined;

        const body = entry.readme;
        const dirtyHtml = (await renderMarkdown(body)).html;
        const rendered = {
          html: sanitizeReadmeHtml(dirtyHtml, repositoryLinkContext),
        };

        let previewImageUrls = undefined;
        if (entry.previewImageUrls && repositoryDetails.status === 'ok') {
          const { owner, repo } = repositoryDetails;
          const ref = repositoryDetails.ref ?? DEFAULT_REPOSITORY_REF;
          previewImageUrls = entry.previewImageUrls.map((path) => `https://diploi.b-cdn.net/starter/${owner}/${repo}/${path}?ref=${ref}`);
        }

        const entryData = await parseData({
          id: entry.identifier,
          data: {
            ...entry,
            icon: Buffer.from(entry.icon).toString('base64'),
            type: componentTypeIDToString[entry.componentTypeID as keyof typeof componentTypeIDToString],
            previewImageUrls,
          },
        });

        store.set({
          id: entry.identifier,
          data: entryData,
          body,
          rendered,
        });
      }
    },
    schema: async () =>
      z.object({
        componentID: z.number().int(),
        type: z.union([z.literal('component'), z.literal('addon'), z.literal('starter')]),
        identifier: z.string(),
        name: z.string(),
        description: z.string(),
        features: z.array(z.string()).optional(),
        versions: z.array(z.string()),
        layer: z.union([z.literal('frontend'), z.literal('backend'), z.literal('fullstack')]).optional(),
        owner: z.strictObject({
          name: z.string(),
          isVerified: z.boolean(),
        }),
        url: z.string(),
        readme: z.string(),
        icon: z.string(),
        previewImageUrls: z.array(z.string()).optional(),
        hidden: z.boolean().optional(),
      }),
  };
}
