// import {
//   Code,
//   Shapes,
//   LinkSimple,
//   Circuitry,
//   Infinity,
//   ArrowsClockwise,
//   IntersectThree,
//   AppWindow,
// } from '@phosphor-icons/react'

import * as icons from '@phosphor-icons/react'
export type LifecyclePoint = {
  id: string
  title: string
  icon: keyof typeof icons
  description: string;
}

export const lifecyclePoints: LifecyclePoint[] = [
  {
    id: 'staging',
    title: 'Staging environments',
    icon: 'IntersectThree',
    description: 'Create and manage staging environments for your application.',
  },
  {
    id: 'share',
    title: 'Share with link',
    icon: 'LinkSimple',
    description: 'Share your application with a link and invite your team.',
  },
  {
    id: 'cicd',
    title: 'CI/CD',
    icon: 'Infinity',
    description: 'Automatically deploy your application to all environments.',
  },
  {
    id: 'autoupdate',
    title: 'Automatic updates',
    icon: 'ArrowsClockwise',
    description: 'Automatically update your application to the latest version.',
  },
  {
    id: 'start',
    title: 'Start from endpoint',
    icon: 'AppWindow',
    description: 'Start your application from a specific endpoint.',
  },
]
