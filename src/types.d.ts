declare module '*.astro' {
  import { AstroComponentFactory } from 'astro'
  const component: AstroComponentFactory
  export default component
}
