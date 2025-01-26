import reactLogo from '../../images/react-logo.svg'
import nextLogo from '../../images/next-logo.svg'
import svelteLogo from '../../images/svelte-logo.svg'
import astroLogo from '../../images/astro-logo.svg'
import laravelLogo from '../../images/laravel-logo.svg'
import postgresqlLogo from '../../images/postgres-logo.svg'
import mongodbLogo from '../../images/mongodb-logo.svg'
import elasticsearchLogo from '../../images/elasticsearch-logo.svg'
import redisLogo from '../../images/redis-logo.svg'
import type { TStackBuilderBlock } from './types'

export const components: TStackBuilderBlock[] = [
  {
    label: 'React + Vite',
    iconSrc: reactLogo,
    iconAlt: 'React logo',
  },
  {
    label: 'Next.js',
    iconSrc: nextLogo,
    iconAlt: 'Next.js logo',
  },
  {
    label: 'SvelteKit',
    iconSrc: svelteLogo,
    iconAlt: 'SvelteKit logo',
  },
  {
    label: 'Astro',
    iconSrc: astroLogo,
    iconAlt: 'Astro logo',
  },
  {
    label: 'Laravel',
    iconSrc: laravelLogo,
    iconAlt: 'Laravel logo',
  },
]

export const addons: TStackBuilderBlock[] = [
  {
    label: 'PostgreSQL',
    iconSrc: postgresqlLogo,
    iconAlt: 'PostgreSQL logo',
  },
  {
    label: 'MongoDB',
    iconSrc: mongodbLogo,
    iconAlt: 'MongoDB logo',
  },
  {
    label: 'Elasticsearch',
    iconSrc: elasticsearchLogo,
    iconAlt: 'Elasticsearch logo',
  },
  {
    label: 'Redis',
    iconSrc: redisLogo,
    iconAlt: 'Redis logo',
  },
]

export const mockYaml =`diploiVersion: v1.0
components:
  - name: Next.js
    identifier: next
    package: https://github.com/diploi/component-nextjs#v0.0.1
  - name: Local
    identifier: local
    package: ./local-package
addons:
  - name: PostgreSQL
    identifier: postgres
    package: https://github.com/diploi/addon-postgres#v17.0`
