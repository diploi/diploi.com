import type { TFeatureMasonryItem } from './types';

const gridArea1 = {
  topLeft: '1/1/4/2',
  bottomLeft: '4/1/7/2',
  centerTop: '1/3/3/2',
  center: '3/3/5/2',
  centerBottom: '5/3/7/2',
  bottomRight: '4/3/7/3',
  topRight: '1/3/4/3',
};

const gridArea = {
  topLeft: '1/1/1/3',
  centerTop: '2/3/3/2',
  center: '2/4/3/3',
  bottomLeft: '2/3/3/0',
  topRight: '1/3/2/3',
};

export const featureMasonryItems: TFeatureMasonryItem[] = [
  {
    id: 'zero-install',
    title: 'Zero-Install Environments',
    description:
      'Spin up fully configured dev environments instantly—no local setup required.',
    gridArea: gridArea.topRight,
    color: '#FFC53D',
    icon: 'MagicWand',
  },
  // {
  //   id: 'browser-ide',
  //   title: 'Browser-Based IDE',
  //   description:
  //     'Code and collaborate from anywhere in a full-featured IDE running in your browser.',
  //   gridArea: gridArea.bottomRight,
  //   color: '#FF801F',
  //   icon: 'Browsers',
  // },
  // {
  //   id: 'ssh',
  //   title: 'SSH Access',
  //   description:
  //     'Securely SSH into containers within your App Cluster for direct terminal interaction.',
  //   gridArea: gridArea.centerBottom,
  //   color: '#6E6E6E',
  //   icon: 'Key',
  // },
  {
    id: 'logging',
    title: 'Real-Time Logging',
    description: 'Quickly view live logs right from your browser.',
    gridArea: gridArea.centerTop,
    color: '#12A594',
    icon: 'TerminalWindow',
  },
  {
    id: 'git-integration',
    title: 'GitHub Integration',
    description: 'Automatic Git integration with CI/CD setup. Just push it.',
    gridArea: gridArea.bottomLeft,
    color: '#3E63DD',
    icon: 'GithubLogo',
  },
  {
    id: 'infrastructure-as-code',
    title: 'Infrastructure as Code',
    description:
      'Your entire infrastructure configuration will be stored in a single YAML file.',
    gridArea: gridArea.center,
    color: '#ec609c',
    icon: 'CodeBlock',
  },
  {
    id: 'custom-components',
    title: 'Custom Components',
    description:
      'Add custom components to your monorepo for complete control and easy reuse.',
    gridArea: gridArea.topLeft,
    color: '#6E56CF',
    icon: 'PuzzlePiece',
    showDocker: true,
    showHelm: true,
  },
];

export const featureMasonryText = {
  description:
    'Zero-install development environments with a single-click. Edit your code directly with our powerful Browser IDE, or connect remotely with your favorite IDE.',
};
