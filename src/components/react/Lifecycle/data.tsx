import * as icons from '@phosphor-icons/react';

export type LifecyclePoint = {
  id: string;
  title: string;
  icon: keyof typeof icons;
  description: string;
};

export const lifecyclePoints: LifecyclePoint[] = [
  {
    id: 'staging',
    title: 'Test Environments',
    icon: 'IntersectThree',
    description: 'Create staging environments to test your application with a single click.',
  },
  {
    id: 'share',
    title: 'Share With Link',
    icon: 'LinkSimple',
    description: 'Share access to environments with a web link and invite anyone to test.',
  },
  {
    id: 'cicd',
    title: 'CI/CD',
    icon: 'Infinity',
    description: 'Automatically configured GitHub actions for easy CI/CD pipelines.',
  },
  {
    id: 'autoupdate',
    title: 'Push to Deploy',
    icon: 'ArrowsClockwise',
    description: 'Automatically update environments with a push, including infrastructure.',
  },
  {
    id: 'start',
    title: 'Monitor Production',
    icon: 'AppWindow',
    description: 'Single-click access to logs. Easy to read status trees for environment services.',
  },
];
