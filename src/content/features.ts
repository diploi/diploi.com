import {
  CircleIcon,
  CodeIcon,
  DiamondIcon,
  GitPullRequestIcon,
  SparkleIcon,
  SquareIcon,
  TriangleIcon,
  UsersIcon,
} from '@phosphor-icons/react';

export const features = [
  {
    id: 'dev',
    href: '/features/dev',
    title: 'Developers',
    description: 'Zero-install remote dev',
    icon: CodeIcon,
    bg: TriangleIcon,
  },
  {
    id: 'teams',
    href: '/features/teams',
    title: 'Teams',
    description: 'Ship faster with zero-config',
    icon: UsersIcon,
    bg: SquareIcon,
  },
  {
    id: 'devops',
    href: '/features/devops',
    title: 'DevOps',
    description: 'GitOps & push to deploy',
    icon: GitPullRequestIcon,
    bg: CircleIcon,
  },
  {
    id: 'ai',
    href: '/features/ai',
    title: 'Vibes & AI',
    description: 'From vibes to prod with zero-config',
    icon: SparkleIcon,
    bg: DiamondIcon,
  },
] as const;
