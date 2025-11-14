import type { FeatureCard } from '../components';

export const featureCards: FeatureCard[] = [
  {
    title: 'Consistent',
    icon: 'Target',
    items: [
      'Consistent environments from development to production',
      'Straightforward yet powerful user experience',
      'Adoptable incrementally - start easy, grow later',
    ],
  },
  {
    title: 'One-Click',
    icon: 'CursorClick',
    items: ['Fast 30 second new developer onboarding', 'One-click environment setup', 'Instantly shareable testing environments'],
  },
  {
    title: 'Zero-Install',
    icon: 'PlugsConnected',
    items: ['Zero-install remote development', 'Versatile support for any stack pre-build or custom'],
  },
];

export const content = {
  pickStack: {
    step: 1,
    title: 'Pick Your Stack',
    highlightedText: 'Stack',
    description:
      'Choose from a constantly growing list of technologies to build your ideal stack. We’ll take care of configuring your monorepo.',
  },
  develop: {
    step: 2,
    title: 'Develop Your App',
    highlightedText: 'Develop',
    description:
      'Zero-install development environments with a single click. Edit your code directly with our powerful Browser IDE, or connect remotely with your favorite IDE.',
    developerFaq: {
      title: 'Developer FAQ',
      description: 'Quick answers to common developer questions.',
    },
    effortlessDevelopment: {
      title: 'Effortless Development',
      description: 'Develop remotely with Diploi using our fast browser IDE, or connect your own over SSH.',
      points: ['Zero-install Browser IDE', 'Local VS Code remote', 'SSH connection'],
    },
  },
  publishApp: {
    step: 3,
    title: 'Publish Your App',
    highlightedText: 'Publish',
    description: 'We take care of the full lifecycle of your app. You can spin up any kind of environment with a single click.',
  },
  timeAndResources: {
    title: 'Benefits of Diploi',
    highlightedText: 'Benefits',
    description:
      'These are real-life statistics from a web development company. Can you afford to ignore the benefits and savings from Diploi?',
    impactMetric: {
      prefix: 'This means, that on average, Diploi saves',
      metric: '300h',
      suffix: 'for every developer, every year.',
    },
  },
};

export const chart = {
  newProjectStartUp: {
    title: 'Starting a New Project',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 7 },
      { title: 'Containerized', value: 115, comparison: 24 },
      { title: 'Traditional', value: 68, comparison: 14 },
    ],
  },
  developerOnboarding: {
    title: 'Onboarding a New Developer',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 10 },
      { title: 'Containerized', value: 45, comparison: 4 },
      { title: 'Traditional', value: 92, comparison: 10 },
    ],
  },
  creatingTestEnvironment: {
    title: 'Creating a New Test Environment',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 10 },
      { title: 'Containerized', value: 62, comparison: 6 },
      { title: 'Traditional', value: 115, comparison: 11 },
    ],
  },
  updatingProduction: {
    title: 'Updating Production',
    description: 'in minutes',
    bars: [
      { title: 'Diploi', value: 3.5 },
      { title: 'Containerized', value: 6, comparison: 2 },
      { title: 'Traditional', value: 16, comparison: 5 },
    ],
    max: 16,
  },
};
