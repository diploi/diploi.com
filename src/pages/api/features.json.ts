import type { APIRoute } from 'astro';
import { features, links } from '../../content/features';

const featuresData = features.map((feature) => ({
  id: feature.id,
  href: feature.href,
  title: feature.title,
  description: feature.description,
}));

const linksData = links.map((link) => ({
  id: link.id,
  href: link.href,
  title: link.title,
}));

export const GET = (async () =>
  new Response(
    JSON.stringify({
      features: featuresData,
      links: linksData,
    })
  )) satisfies APIRoute;
