import type { TDeveloperFaqItem } from './types';

export const developerFaqItems: TDeveloperFaqItem[] = [
  {
    id: 'developer-faq-1',
    question: 'Where does my code live?',
    answer:
      'Your code lives in your own GitHub repository. Diploi accesses it trough our GitHub app.',
  },
  {
    id: 'developer-faq-3',
    question: 'What if I want to switch to another service?',
    answer:
      'Your code is yours to run anywhere. Powered by Kubernetes, a Diploi project runs wherever a Kubernetes cluster does.',
  },
];
