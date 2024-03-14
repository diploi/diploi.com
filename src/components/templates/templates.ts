import nextLogo from '../../images/next-logo.svg';
import svelteLogo from '../../images/svelte-logo.svg';
import astroLogo from '../../images/astro-logo.svg';
import ollamaLogo from '../../images/ollama-logo.png';

export const templates = [
  {
    slug: 'next',
    title: 'Next.js Starter',
    shortTitle: 'Next.js',
    image: nextLogo,
    imageAlt: 'Next.js logo',
    description:
      'A simple starter ToDo app template implemented with Next.js & React.\nIncludes an optional PostgreSQL database. Features full TypeScript support, out-of-the-box DB connection, HMR support, and much more!',
    features: ['ToDo app', 'Next.js & React', 'TypeScript', 'PostgreSQL'],
    links: [
      {
        title: 'Documentation',
        href: 'https://docs.diploi.com/templates/nextjstodo/',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/diploi/nextjs-postgresql-template',
      },
    ],
  },
  {
    slug: 'sveltekit',
    title: 'SvelteKit Starter',
    shortTitle: 'SvelteKit',
    image: svelteLogo,
    imageAlt: 'SvelteKit logo',
    description:
      'A simple starter ToDo app template implemented with SvelteKit.\nIncludes an optional PostgreSQL database. Features full TypeScript support, out-of-the-box DB connection, HMR support, and much more!',
    features: ['ToDo app', 'SvelteKit & Svelte', 'TypeScript', 'PostgreSQL'],
    links: [
      {
        title: 'Documentation',
        href: 'https://docs.diploi.com/templates/sveltetodo/',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/diploi/sveltekit-template',
      },
    ],
  },
  {
    slug: 'astro',
    title: 'Astro Starter',
    shortTitle: 'Astro',
    image: astroLogo,
    imageAlt: 'Astro logo',
    description:
      'Astro is an all-in-one web framework for building fast, content-focused websites. SSR support with the Node.js adapter is preconfigured.\nOptional PostgreSQL database.',
    features: ['Astro', 'Node.js adapter for SSR', 'TypeScript', 'PostgreSQL'],
    links: [
      {
        title: 'Astro with PostgreSQL',
        href: 'https://dev.to/diploi/astro-with-postgresql-1mpf',
      },
      {
        title: 'Documentation',
        href: 'https://docs.diploi.com/templates/astro/',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/diploi/astro-template',
      },
    ],
  },
];
