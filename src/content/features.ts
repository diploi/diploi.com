import {
  CircleIcon,
  CloudIcon,
  CodeIcon,
  DiamondIcon,
  FileTextIcon,
  GitDiffIcon,
  GitPullRequestIcon,
  GlobeIcon,
  HardDrivesIcon,
  LockSimpleIcon,
  PlayCircleIcon,
  SparkleIcon,
  SquareIcon,
  ToolboxIcon,
  TriangleIcon,
  UsersIcon,
} from '@phosphor-icons/react';

export const features = [
  {
    id: 'dev',
    href: '/features/dev',
    title: 'Developers',
    description: 'Zero-install cloud development',
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

export const links = [
  {
    id: 'cloud-ide',
    href: '/features/dev#editors',
    title: 'Cloud IDE',
    icon: CloudIcon,
  },
  {
    id: 'prod',
    href: '/features/devops#deploy',
    title: 'Prod & Preview',
    icon: HardDrivesIcon,
  },
  {
    id: 'cicd',
    href: '/features/devops#iac',
    title: 'Infrastructure as Code',
    icon: FileTextIcon,
  },
  {
    id: 'stack-builder',
    href: '/features/dev#stack-builder',
    title: 'Stack Builder',
    icon: ToolboxIcon,
  },
  {
    id: 'cicd',
    href: '/features/devops#deploy',
    title: 'CI/CD',
    icon: PlayCircleIcon,
  },
  {
    id: 'github',
    href: '/features/dev#deploy',
    title: 'GitHub Integration',
    icon: GitDiffIcon,
  },
  {
    id: 'ssh',
    href: '/features/devops#cdn',
    title: 'Global CDN',
    icon: GlobeIcon,
  },
  {
    id: 'ssh',
    href: '/features/teams#security',
    title: 'Security',
    icon: LockSimpleIcon,
  },
];
