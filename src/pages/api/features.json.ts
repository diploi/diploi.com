import type { APIRoute } from 'astro';
import { ctas, docs, features, imports, links } from '../../content/features';

const featuresData = features.map((feature) => ({
  id: feature.id,
  href: feature.href,
  title: feature.title,
  description: feature.description,
  context: feature.context,
  docs: feature.docs,
}));

const linksData = [...links, ...imports, ...docs].map((link) => ({
  id: link.id,
  href: link.href,
  title: link.title,
  context: link.context,
  docs: 'docs' in link ? link.docs : [],
}));

export const GET = (async () =>
  new Response(
    JSON.stringify({
      features: featuresData,
      links: linksData,
      ctas,
    })
  )) satisfies APIRoute;
