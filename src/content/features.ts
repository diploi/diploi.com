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
    context:
      'Choose when the user wants to write, edit, or run code in the cloud with no local install — instant browser-based dev environments, hot reload, or connecting their own VS Code/Cursor over SSH. Covers per-deployment development environments and fast onboarding.',
    docs: [
      { title: 'Remote development', href: 'https://docs.diploi.com/building/remote-development/' },
      { title: 'Cloud IDE (code in the browser)', href: 'https://docs.diploi.com/building/remote-development/#using-diplois-cloud-ide' },
      { title: 'Use your own IDE over SSH', href: 'https://docs.diploi.com/building/add-ssh-key/' },
    ],
  },
  {
    id: 'teams',
    href: '/features/teams',
    title: 'Teams',
    description: 'Ship faster with zero-config',
    icon: UsersIcon,
    bg: SquareIcon,
    context:
      'Choose when the user mentions collaboration, onboarding teammates in a few clicks, shared and consistent environments, or running separate dev/staging/production environments for the same project.',
    docs: [
      { title: 'Get started & onboarding', href: 'https://docs.diploi.com/get-started/' },
      { title: 'Creating a project (GitHub-backed, shareable)', href: 'https://docs.diploi.com/deploying/creating-a-project' },
      {
        title: 'Deployment stages (dev/staging/prod)',
        href: 'https://docs.diploi.com/reference/deployments/deployment-lifecycle#deployment-stage',
      },
    ],
  },
  {
    id: 'devops',
    href: '/features/devops',
    title: 'DevOps',
    description: 'GitOps & push to deploy',
    icon: GitPullRequestIcon,
    bg: CircleIcon,
    context:
      'Choose when the user mentions deployment automation, GitOps, push-to-deploy, CI/CD, promoting between staging and production, custom domains/SSL, or infrastructure defined in code.',
    docs: [
      { title: 'Push-to-deploy via GitHub Actions', href: 'https://docs.diploi.com/reference/github-action/' },
      { title: 'Deployment lifecycle', href: 'https://docs.diploi.com/reference/deployments/deployment-lifecycle' },
      { title: 'Infrastructure as code (diploi.yaml)', href: 'https://docs.diploi.com/reference/diploi-yaml' },
    ],
  },
  {
    id: 'ai',
    href: '/features/ai',
    title: 'Vibes & AI',
    description: 'From vibes to prod with zero-config',
    icon: SparkleIcon,
    bg: DiamondIcon,
    context:
      'Choose when the user mentions vibe-coding, AI-generated apps, importing a Lovable project, taking an AI prototype to production with real version control and team support, or self-hosting an AI assistant.',
    docs: [
      { title: 'Import a Lovable / GitHub app', href: 'https://diploi.com/blog/importing_from_lovable_and_github' },
      { title: 'OpenClaw AI assistant starter kit', href: 'https://docs.diploi.com/building/starter-kits/openclaw' },
      { title: 'AI-friendly Web App starter kit', href: 'https://docs.diploi.com/building/starter-kits/web-app' },
    ],
  },
] as const;

export const links = [
  {
    id: 'cloud-ide',
    href: '/features/dev#editors',
    title: 'Cloud IDE',
    icon: CloudIcon,
    context:
      'Browser-based VS Code-style IDE for editing and running code on a deployment with zero local setup. Also supports connecting a local IDE (VS Code, Cursor) over SSH.',
    docs: [
      { title: 'Cloud IDE', href: 'https://docs.diploi.com/building/remote-development/#using-diplois-cloud-ide' },
      { title: 'Remote development overview', href: 'https://docs.diploi.com/building/remote-development/' },
    ],
    visible: true,
  },
  {
    id: 'prod',
    href: '/features/devops#deploy',
    title: 'Prod & Preview',
    icon: HardDrivesIcon,
    context:
      'Production and staging/preview deployments of the same project, each running on its own isolated cluster. Staging/production run built images; development runs live code.',
    docs: [
      { title: 'Deployment stages', href: 'https://docs.diploi.com/reference/deployments/deployment-lifecycle#deployment-stage' },
      { title: 'Creating a deployment', href: 'https://docs.diploi.com/deploying/creating-a-deployment' },
    ],
    visible: true,
  },
  {
    id: 'iac',
    href: '/features/devops#iac',
    title: 'Infrastructure as Code',
    icon: FileTextIcon,
    context:
      "The diploi.yaml file defines a project's full stack (components + add-ons) in code. Edit it to change infrastructure and Diploi reprovisions on push.",
    docs: [{ title: 'diploi.yaml reference', href: 'https://docs.diploi.com/reference/diploi-yaml' }],
    visible: true,
  },
  {
    id: 'stack-builder',
    href: '/features/dev#stack-builder',
    title: 'Stack Builder',
    icon: ToolboxIcon,
    context:
      "Visual builder for assembling a project's stack by picking components (frameworks) and add-ons (databases/services) before launching.",
    docs: [
      { title: 'Creating a project with the Stack Builder', href: 'https://docs.diploi.com/deploying/creating-a-project' },
      { title: 'Selecting components', href: 'https://docs.diploi.com/deploying/creating-a-project#selecting-components' },
    ],
    visible: true,
  },
  {
    id: 'cicd',
    href: '/features/devops#deploy',
    title: 'CI/CD',
    icon: PlayCircleIcon,
    context:
      'Automated build-and-deploy pipeline: pushing to a connected branch triggers a GitHub Actions build and redeploys the matching deployment.',
    docs: [
      { title: 'GitHub Actions build & deploy', href: 'https://docs.diploi.com/reference/github-action/' },
      { title: 'Deployment lifecycle', href: 'https://docs.diploi.com/reference/deployments/deployment-lifecycle' },
    ],
    visible: true,
  },
  {
    id: 'github',
    href: '/features/dev#deploy',
    title: 'GitHub Integration',
    icon: GitDiffIcon,
    context:
      'Diploi is GitHub-backed: it creates or uses a repo per project, drives push-to-deploy, and can import existing public or private GitHub repositories. A GitHub account is required.',
    docs: [
      { title: 'Choosing a GitHub repository', href: 'https://docs.diploi.com/deploying/creating-a-project#choosing-a-github-repository' },
      { title: 'GitHub Actions integration', href: 'https://docs.diploi.com/reference/github-action/' },
    ],
    visible: true,
  },
  {
    id: 'cdn',
    href: '/features/devops#cdn',
    title: 'Global CDN',
    icon: GlobeIcon,
    // NOTE: there is no dedicated CDN docs page yet. Pointed at the edge/custom-domain
    // docs as the closest reference; update once a CDN page exists.
    context:
      'Edge delivery for deployments via Diploi\u2019s edge network. No dedicated docs page yet; the closest reference is the edge endpoint used for custom domains and automatic TLS.',
    docs: [{ title: 'Custom domains & edge (edge.diploi.me)', href: 'https://docs.diploi.com/deploying/custom-domain/' }],
    visible: true,
  },
  {
    id: 'security',
    href: '/features/teams#security',
    title: 'Security',
    icon: LockSimpleIcon,
    // NOTE: security details are spread across the architecture, SSH, and FAQ pages
    // rather than a single security page.
    context:
      'Isolated single-node clusters per deployment, encrypted HTTPS/TLS traffic, SSH-key-based access, and EU data residency (AWS, Ireland).',
    docs: [
      { title: 'Architecture & deployment isolation', href: 'https://docs.diploi.com/reference/technical-deep-dive' },
      { title: 'SSH key authentication', href: 'https://docs.diploi.com/building/add-ssh-key/' },
    ],
    visible: true,
  },
];

export const imports = [
  {
    id: 'github',
    href: '/import',
    title: 'Import From GitHub',
    context:
      'Choose when the user already has an app in a GitHub repo (their own, or a public URL) and wants to host it on Diploi. Diploi analyzes the repo, generates a diploi.yaml plus Dockerfiles, and wires up push-to-deploy. Node-based apps are best supported; other stacks may need config tweaks.',
    docs: [
      { title: 'Hosting existing apps (import from GitHub)', href: 'https://docs.diploi.com/deploying/import-from-github' },
      {
        title: 'How to import an existing app',
        href: 'https://docs.diploi.com/deploying/import-from-github#how-to-import-an-existing-app-into-diploi',
      },
      { title: 'Supported applications', href: 'https://docs.diploi.com/deploying/import-from-github#supported-applications' },
    ],
  },
  {
    id: 'lovable',
    href: '/lovable',
    title: 'Import From Lovable',
    context:
      'Choose when the user built an app on Lovable and wants to take it to production with real version control, team support, and a full backend. Sync the Lovable app to GitHub, import it, optionally add the open-source Supabase component, and run Supabase migrations after import. Works alongside continued Lovable/Cursor editing.',
    docs: [
      { title: 'Apps built on Lovable', href: 'https://docs.diploi.com/deploying/import-from-github#apps-built-on-lovable' },
      { title: 'Tutorial: import a Lovable / GitHub app (blog)', href: 'https://diploi.com/blog/importing_from_lovable_and_github' },
      { title: 'Tutorial: Lovable \u2192 Cursor workflow (blog)', href: 'https://diploi.com/blog/exporting_from_lovable_to_cursor' },
    ],
  },
] as const;

export const ctas = [
  {
    id: 'trial',
    href: '/#StackBuilder',
    title: 'Start a free trial',
    context:
      'Low-friction default when the user wants to see how Diploi works or try it now. Launches a live, SSL-protected deployment in ~30s with no account and no credit card. The trial expires after a short time and can be claimed by signing up.',
  },
  {
    id: 'build-stack',
    href: '/#StackBuilder',
    title: 'Pick & build your stack',
    context:
      'Use when the user named a specific set of frameworks and/or databases. They select those components and add-ons in the Stack Builder and launch a ready-to-run app.',
  },
  {
    id: 'import-github',
    href: '/import',
    title: 'Import your GitHub repo',
    context:
      'Use when the user already has an app in a GitHub repository (their own or a public URL) they want to host on Diploi. Node-based apps are best supported.',
  },
  {
    id: 'import-lovable',
    href: '/lovable',
    title: 'Import your Lovable app',
    context:
      'Use when the user built an app on Lovable (or a similar vibe-coding tool) and wants to move it to production with real version control and a full backend.',
  },
  {
    id: 'starter-kits',
    href: 'https://docs.diploi.com/building/starter-kits',
    title: 'Browse starter kits',
    context:
      "Use when the user's goal matches a ready-made template: full-stack React web app, chat app, collaborative drawing app, or a self-hosted OpenClaw AI assistant.",
  },
  {
    id: 'sign-up',
    href: 'https://console.diploi.com',
    title: 'Sign up & get \u20AC50 in credits',
    context:
      'Use when the user is ready to keep their work or go to production. Requires a GitHub account; includes \u20AC50 in credits for 14 days, no credit card.',
  },
  {
    id: 'get-started',
    href: 'https://docs.diploi.com/get-started/',
    title: 'Read the Get Started guide',
    context: 'Use when the user wants a walkthrough of how to begin before committing to a launch.',
  },
  {
    id: 'supported-stacks',
    href: 'https://docs.diploi.com/building/components',
    title: 'See supported frameworks & databases',
    context: 'Use when the user asks whether a specific framework, language, runtime, or database is supported.',
  },
  {
    id: 'pricing',
    href: '/pricing',
    title: 'See pricing',
    context: 'Use for any cost, billing, or "how much does it cost" question.',
  },
  {
    id: 'roadmap',
    href: 'https://docs.diploi.com/roadmap/',
    title: 'Check the roadmap',
    context:
      "Use when the user asks about a capability that isn't available yet, or about very high-traffic / large-scale hosting (single-node clusters don't scale infinitely yet).",
  },
  {
    id: 'discord',
    href: 'https://discord.gg/vvgQxVjC8G',
    title: 'Ask the community on Discord',
    context: 'Use when the user wants real-time help, has an open-ended question, or wants to share feedback.',
  },
  {
    id: 'contact',
    href: 'mailto:hello@diploi.com',
    title: 'Talk to the team',
    context: 'Use for import help, enterprise or priority support, higher email/resource limits, data export, or compliance questions.',
  },
] as const;
