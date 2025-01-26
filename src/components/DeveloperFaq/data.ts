import type { TDeveloperFaqItem } from './types'

export const developerFaqItems: TDeveloperFaqItem[] = [
  {
    id: 'developer-faq-1',
    question: 'Where does my code live?',
    answer:
      'Your code lives in your GitHub repository. You can use any language you like, but we recommend using TypeScript or JavaScript with Node.js.',
  },
  {
    id: 'developer-faq-2',
    question: 'Is remote development laggy or slow?',
    answer:
      'Remote development is fast and efficient. We have optimized our infrastructure to make it as fast as possible.',
  },
  {
    id: 'developer-faq-3',
    question: 'What if I want to switch to another service?',
    answer:
      'Diploi is a SaaS service, so you can switch to another service at any time. We offer a free trial so you can try out the service before committing to a subscription.',
  },
  {
    id: 'developer-faq-4',
    question: 'Is remote development expensive?',
    answer:
      'Remote development is free. You only pay for the resources you use.',
  },
]
