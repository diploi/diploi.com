import type { TDeveloperFaqItem } from "./types";

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

export const developerFaqItems: TDeveloperFaqItem[] = [
  {
 id: "homepage-what-is-diploi",
 page: "homepage",
 question: "What is Diploi?",
 answer:
      "Diploi is a platform that combines cloud development environments and app hosting in a single place, and is meant to be an all-in-one solution where developers can scaffold applications from zero, start developing applications without a local setup using cloud development environments, which do not require any configuration work, and deploy staging and production environments instantly. All applications launched and hosted on Diploi come with a CI/CD pipeline setup by default, automatic SSL certificates, and zero-config cloud development environments.",
  },
  {
 id: "homepage-code-storage",
 page: "homepage",
 question: "Where is my code stored, and how does Git integration work?",
 answer:
      "Your code lives in your own GitHub repository. Diploi configures a GitHub Action that triggers a CI/CD workflow that updates your staging and production environments, and is triggered when new updates are pushed to the repository linked to a project hosted in Diploi.",
  },
  {
 id: "homepage-component-limits",
 page: "homepage",
 question: "Is there a limit to how many components or add-ons a project can have in Diploi?",
 answer:
      "There is no limit, so you can have all supported frameworks and databases supported by Diploi, the only limitation is the computing power required by a deployment to handle a large stack of components and add-ons.",
  },
  {
 id: "homepage-vps-provider",
 page: "homepage",
 question: "Is Diploi a VPS provider?",
 answer:
      "No, Diploi is a fully managed development and deployment platform. You cannot choose the OS where your application is deployed, and you do not have configuration access to the server's settings.",
  },
  {
 id: "homepage-ssh-access",
 page: "homepage",
 question: "Do I get SSH access to the servers where my project is hosted in Diploi?",
 answer:
      "Yes, Diploi uses Kubernetes to host your application's cloud development environment, components, and add-ons as individual pods, which you can access via SSH.",
  },
  {
 id: "homepage-sharing",
 page: "homepage",
 question: "Can I share my application with others for testing?",
 answer: "Yes, each environment has a unique URL you can share, so others can access and test your app instantly.",
  },
  {
 id: "homepage-monitoring",
 page: "homepage",
 question: "How do I monitor logs or production status?",
 answer:
      "Diploi provides real-time logging for each component and add-on that is part of your application. Additionally, from the deployment's dashboard, you have access to graphs showing the resource usage of your app's cluster and its current health status. Additionally, all development deployments on Diploi come with a Diploi CLI, which gives you access to logs in real-time and can be used for programmatic log data tracking.",
  },
  {
 id: "homepage-move-off",
 page: "homepage",
 question: "What if I want to move off Diploi later?",
 answer:
      "You can move your project out of Diploi at any point. All Diploi projects can be run on any VPS or managed hosting service, either by running each component and add-on as you usually would do via terminal commands (eg. npm run start), or by using the Dockerfiles that Diploi generates for your app's components.",
  },
  {
 id: "homepage-free-trial",
 page: "homepage",
 question: "Is there a free trial or credits?",
 answer:
      "When you sign up with GitHub, you receive €50 in free credits valid for 14 days. These credits let you explore Diploi fully without a credit card. After the trial, you only pay for the time that your application is online and the storage utilized. There are no additional costs or fees for extra services.",
  },
  {
 id: "homepage-stack-builder",
 page: "homepage",
 question: "What is the Stack Builder in Diploi?",
 answer:
      "Stack Builder is a tool for scaffolding new apps. It can generate boilerplate code and project structure for common stacks. For example, you can pick frameworks and databases, and the Stack Builder will create a ready-to-launch application template. This jumpstarts new projects so you can begin coding immediately.",
  },
  {
 id: "pricing-model",
 page: "pricing",
 question: "What is the pricing model of Diploi?",
 answer:
      "Diploi has a usage-based pricing model, where you only pay for the hours that your deployment is running and the storage used. This applies to development, testing, and production environments alike.",
  },
  {
 id: "pricing-free",
 page: "pricing",
 question: "Can I use Diploi for free?",
 answer:
      "Yes, you can use Diploi free for 14 days when you register for the first time. There are no upfront fees or credit card requirements. After that, you need to add a valid payment method, because Diploi does not offer a free tier.",
  },
  {
 id: "pricing-cost-examples",
 page: "pricing",
 question: "How much does a development or production environment cost?",
 answer:
      "Costs depend on the cluster size, storage needs, and the amount of time online per deployment. For example, a size M cluster (2 cores, 8gb ram), with 10gb of storage, and used for cloud development for 7 hours per workday, costs €9 per month. A smaller size S cluster (2 cores, 4gb ram), with 10gb of storage, meant for production and running full-time (24/7) would cost €21 per month.",
  },
  {
 id: "pricing-enterprise",
 page: "pricing",
 question: "Are there enterprise plans?",
 answer:
      `Yes, we offer an Enterprise tier with tailored pricing and custom services. Enterprise customers get priority support, migration services, integration assistance, and the ability to add custom components to the platform. If you are interested, message us at hello@diploi.com or book a call with our team here ${calendlyUrl}.`,
  },
  {
 id: "pricing-taxes",
 page: "pricing",
 question: "Are taxes or VAT included in these prices?",
 answer: "No, listed prices do not include taxes or VAT. Taxes will be added according to your location.",
  },
  {
 id: "dev-vibecoders",
 page: "dev",
 question: "Is Diploi for Developers or Vibecoders?",
 answer:
      "Diploi is built with developers in mind, as a way to simplify how apps with diverse stacks can be built and hosted without requiring complicated setups to allow context switching. That said, it is also designed to help casual users who are interested in Vibecoding as a way to build web applications, but it requires at least some familiarity with concepts like SSH and Git workflows to take advantage of all the features of Diploi.",
  },
  {
 id: "dev-ide-support",
 page: "dev",
 question: "Which IDEs are supported on Diploi?",
 answer:
      "You have multiple options. Diploi has a built-in browser-based IDE, and you can also connect any IDE with support for SSH and devcontainers. By default, Diploi provides native support for VS Code and Cursor, but you can also connect to a Diploi cloud development environment by configuring a remote connection using SSH from Zed, Windsurf, and JetBrains IDEs.",
  },
  {
 id: "dev-deploy",
 page: "dev",
 question: "How do I deploy my application on Diploi?",
 answer:
      "All applications kick-started in Diploi are deployed online by default and do not require any special configuration. If you have an existing project on GitHub, you can import it, and Diploi will generate the configuration necessary to host it online, but in some cases, this process might require some changes to work properly. If you are having issues, please reach out via email at hello@diploi.com or message us on Discord.",
  },
  {
 id: "dev-team-collab",
 page: "dev",
 question: "How do teams collaborate on Diploi?",
 answer:
      "On Diploi, each project can have independent development deployments for each developer in a team. You can share a link to an environment and even access a teammate's environment directly. Environments can be cloned and shared for previewing purposes. Onboarding a new developer is fast, requiring about 30 seconds to get them up and running, since there's no local configuration required or limitations based on the developer's OS of preference.",
  },
  {
 id: "teams-integration",
 page: "teams",
 question: "Can Diploi integrate with our existing infrastructure?",
 answer:
      "Yes, for Enterprise clients, we provide support for on-premise and bring-your-own-cloud setups, so you can get the user experience that Diploi offers, while still running your current cloud.",
  },
  {
 id: "teams-efficiency",
 page: "teams",
 question: "How does Diploi improve team efficiency?",
 answer:
      "By simplifying context switching, developers can move between projects using different configurations at ease, without requiring any time to customize their local environment, which also removes all \"works on my machine\" issues. Diploi also reduces handoff time, since projects can be transferred to clients without requiring any management for custom infrastructure configuration, helping teams minimize the amount of time spent to deliver a project.",
  },
  {
 id: "teams-security",
 page: "teams",
 question: "What security measures does Diploi provide for teams?",
 answer:
      "Diploi keeps projects secure by default, since developers do not need to copy source code or credentials on their local machines, minimizing the exposure to data breaches. Access is centrally controlled (with unified auth and permissions), and each developer's VM is isolated from others.",
  },
  {
 id: "teams-permissions",
 page: "teams",
 question: "How are access and permissions managed?",
 answer:
      "Diploi provides central access control, so team leads can manage team permissions and authentication for all environments from a single dashboard. This means you have full visibility and control over who can access each project or environment.",
  },
  {
 id: "teams-isolation",
 page: "teams",
 question: "How isolated are development environments?",
 answer:
      "Each developer in a team can get an individual cloud development environment. No environment shares processes, file systems, or credentials with another.",
  },
  {
 id: "devops-infrastructure",
 page: "devops",
 question: "How is infrastructure configured on Diploi?",
 answer:
      "Diploi uses an Infrastructure-as-Code model where your entire stack is defined in a single YAML file (diploi.yaml). In this file, you list components, add-ons, and settings, which Diploi uses to automatically create development, staging, and production environments.",
  },
  {
 id: "devops-gitops",
 page: "devops",
 question: "What is \"GitOps\" or \"push to deploy\" on Diploi?",
 answer:
      "GitOps on Diploi means Git is the single source of truth. As for \"push to deploy\", we mean that when you want to deploy an update, you simply push your code (`git push`), and Diploi automatically builds and deploys it across environments.",
  },
  {
 id: "devops-ci-cd",
 page: "devops",
 question: "How are CI/CD pipelines automatically handled?",
 answer: " Diploi pre-configures new and imported GitHub projects, with a GitHub Action that is generated based on the contents of the `diploi.yaml` file, which adds a CI/CD pipeline that updates development and staging/production deployments that belong to the project.",
  },
  {
 id: "devops-preview",
 page: "devops",
 question: "Can I preview changes before production?",
 answer:
      "Yes, Diploi provides live endpoints for all deployments, which allows you to preview your applications.",
  },
  {
 id: "devops-integrations",
 page: "devops",
 question: "Can we integrate Diploi with our current cloud setup?",
 answer: "Yes, Diploi can be integrated with your existing infrastructure. Reach out to our team for more information.",
  },
  {
 id: "devops-large-stacks",
 page: "devops",
 question: "Is Diploi suitable for large or complex stacks?",
 answer:
      "Yes, Diploi can run any application, but it might require some additional configuration. We provide migration services to run your existing projects on Diploi.",
  },
  {
 id: "ai-meaning",
 page: "ai",
 question: "What does \"AI\" mean in Diploi's context?",
 answer:
      "Diploi supports AI tools throughout the development lifecycle while keeping you in control. Since each deployment is independent, you can use Diploi as a way to provision sandboxed environments to run AI-generated code.",
  },
  {
 id: "ai-lock-in",
 page: "ai",
 question: "Am I locked into Diploi's tools for AI?",
 answer:
      "No, you can use any editor or tool over SSH (including your existing tools) and optionally use Diploi's AI features. It's fully compatible with the workflows you already know.",
  },
  {
 id: "ai-code-location",
 page: "ai",
 question: "Where does my code live, and can I still use my own repos?",
 answer:
      "Your code stays within your deployments, which can be synced with your own Git repository. You can always use your own Git repo, as long as it uses GitHub. We also support other Git providers, but it requires additional configuration, so please reach out to our team if you would like to use Diploi with a different Git solution like GitLab or GitBucket.",
  },
  {
 id: "ai-open-source",
 page: "ai",
 question: "Are Diploi's components and add-ons open source?",
 answer:
      "Yes, all of Diploi's supported stack components and add-ons are open source and available on GitHub. You can inspect them and make suggestions for changes via GitHub issues or by making your own pull request. You can find them in our GitHub repository https://github.com/orgs/diploi/repositories",
  },
  {
 id: "ai-editor-support",
 page: "ai",
 question: "Which code editors have special AI support?",
 answer:
      "Officially supported editors include VS Code and Cursor. In VS Code, you can use GitHub Copilot and agent mode, and in Cursor, you get autocomplete, chat, and agent features. You can also use any other IDE that supports remote SSH connection to connect to your development environments.",
  },
  {
 id: "jobs-mission",
 page: "jobs",
 question: "What is Diploi's mission?",
 answer:
      "Diploi is a company building a simple, scalable PaaS for cloud development. Our mission is to deliver a developer experience that looks and feels magical. We aim to redefine how devs code by removing the boring work involved in building web applications.",
  },
  {
 id: "jobs-hiring",
 page: "jobs",
 question: "What kind of people is Diploi looking to hire?",
 answer:
      "At Diploi, we hire people who are passionate about developer experience, scalability, and tackling hard problems. We value curiosity, drive, and love for challenges.",
  },
  {
 id: "jobs-qualifications",
 page: "jobs",
 question: "Do I need to meet every listed qualification?",
 answer:
      "No, you don't need to check every box. We are more interested in curious and driven people than in your accolades. If you're eager and a quick learner, we want to hear from you, even if you don't match every requirement.",
  },
  {
 id: "jobs-application",
 page: "jobs",
 question: "What should I include in my application?",
 answer:
      "Along with your resume or CV, we ask for a short intro explaining your interest and any relevant projects or code you've worked on. Showing real examples of your work (eg. GitHub repos, demos) is especially helpful.",
  },
  {
 id: "faq-what-is-diploi",
 page: "faq",
 question: "What is Diploi?",
 answer:
      "Diploi is a cloud development and hosting platform that eliminates all configuration work, so developers can start coding instantly, even when managing multiple projects with different tech stacks, databases, and dependencies. It's an all-in-one solution where developers can scaffold applications from zero, code without local setup using cloud development environments, and deploy staging and production environments instantly. All applications launched on Diploi come with a CI/CD pipeline by default, automatic SSL certificates, and zero-config cloud development environments.",
  },
  {
 id: "faq-what-apps-can-you-build",
 page: "faq",
 question: "What kind of apps can you build with Diploi?",
 answer:
      "You can build virtually any web application on Diploi, from simple static sites to complex full-stack applications with multiple microservices and databases. Common use cases include Next.js apps, Astro websites, Node.js APIs, Python backends with FastAPI or Django, and full-stack applications with PostgreSQL, MongoDB, or Redis.",
  },
  {
 id: "faq-what-problem-solved",
 page: "faq",
 question: "What problem does Diploi solve?",
 answer:
      "Diploi eliminates the friction between development and production. Instead of handling separate tools for local development, staging, CI/CD, and hosting, Diploi provides a single platform where your development environments are consistent and isolated in the cloud. It removes the \"works on my machine\" when working with teams, allows you to skip all DevOps overhead by simplifying infrastructure into a single YAML file, and makes all your projects free of the usual configuration complexity, so you can start coding without ever worrying about having the correct dependencies on your local machine.",
  },
  {
 id: "faq-who-is-diploi-for",
 page: "faq",
 question: "Who is Diploi for?",
 answer:
      "Diploi is built for developers and teams who want to ship faster without manually managing infrastructure or wondering if the project still runs on their local machine. Whether you're a solo developer prototyping a new idea, a team building production applications, or an agency managing multiple client projects, Diploi simplifies how you can move from one project to another, regardless of the tech stack, and makes the workflow from dev to staging/production seamless. It's also ideal for developers transitioning from vibe-coding tools like Lovable, who need production-ready infrastructure.",
  },
  {
 id: "faq-free-trial",
 page: "faq",
 question: "Is there a free trial or credits?",
 answer:
      "When you sign up with GitHub, you receive €50 in free credits valid for 14 days. These credits let you explore Diploi fully without a credit card. After the trial, you only pay for the time that your application is online and the storage utilized. There are no additional costs or fees for extra services.",
  },
  {
 id: "faq-try-without-registering",
 page: "faq",
 question: "Can I try Diploi without registering?",
 answer:
      "Yes! You can launch a trial without registration, directly from our homepage, and stay active for 1 hour.",
  },
  {
 id: "faq-compare-replit",
 page: "faq",
 question: "How does Diploi compare to Replit?",
 answer:
      "Diploi gives you full control over your infrastructure by making changes to the diploi.yaml file. Your code lives in your own GitHub repository (not locked into a proprietary system), and you can connect with any IDE that supports SSH remote environments, like VS Code, Cursor or Zed. Diploi is designed for serious development and production workloads, not just prototyping.",
  },
  {
 id: "faq-compare-vercel-netlify",
 page: "faq",
 question: "How does Diploi compare to Vercel or Netlify?",
 answer:
      "Vercel and Netlify focus mainly on frontend hosting, but Diploi is a full-stack platform. You can get your frontend, backend, and databases in a single deployment, without having to manage separate database providers or servers.",
  },
  {
 id: "faq-compare-lovable",
 page: "faq",
 question: "How does Diploi compare to Lovable?",
 answer:
      "Lovable is great for AI-assisted prototyping and early-stage production, but as your idea scales, Lovable can be too limited to help you grow. Diploi can take your Lovable app forward by allowing you to add services and databases that your application might need to evolve its capabilities, and then continue with development using tools like Cursor or VS Code. Diploi provides the infrastructure, version control, team collaboration, and deployment pipeline that Lovable projects need to become real products.",
  },
  {
 id: "faq-alternative-valtown-n8n",
 page: "faq",
 question: "Is Diploi a good alternative to val.town?",
 answer:
      "val.town works well for small apps, microservices, and running edge functions, but it means you will need to manage an additional service along with your main application's infrastructure. Diploi can operate in the same way as val.town, but it gives you control over your environment with persistent storage, custom domains, and the ability to run your microservices and edge functions, as part of your main app's deployment, which simplifies development and helps you reduce costs.",
  },
  {
 id: "faq-vibecoding",
 page: "faq",
 question: "Can I use Diploi for vibe coding?",
 answer:
      "Absolutely! Diploi is the perfect tool for vibe coding. You can use AI-ready IDEs like Cursor and Zed to generate code, or use our browser IDE with OpenAI's Codex or Anthropic's Claude, without having to add API keys.",
  },
  {
 id: "faq-deploy-vibecoded-app",
 page: "faq",
 question: "How do I deploy a vibe-coded app?",
 answer:
      "Simply push your code to GitHub, then create a production deployment, and Diploi will automatically build and deploy it. If you're coming from a tool like Lovable, you can import your project directly. Diploi generates all the configuration needed, CI/CD pipelines, and SSL certificates, so you can focus only on building.",
  },
  {
 id: "faq-cursor-zed-support",
 page: "faq",
 question: "Can I use Cursor or Zed with Diploi?",
 answer:
      "Yes! Connect Cursor, Zed, VS Code, Windsurf, or any SSH-capable IDE directly to your Diploi development environment.",
  },
  {
 id: "faq-developers-or-vibecoders",
 page: "faq",
 question: "Is Diploi for Developers or Vibecoders?",
 answer:
      "Diploi is built with developers in mind, as a way to simplify how apps with diverse stacks can be built and hosted without requiring complicated setups. That said, it's also designed to help casual users interested in vibe coding, but it requires at least some familiarity with concepts like SSH and Git workflows to take advantage of all features.",
  },
  {
 id: "faq-nextjs-support",
 page: "faq",
 question: "Does Diploi support Next.js?",
 answer:
      "Yes! Next.js is fully supported with all of its features like App Router, Server Actions, API routes, and SSR.",
  },
  {
 id: "faq-astro-support",
 page: "faq",
 question: "Does Diploi support Astro?",
 answer:
      "Absolutely. Diploi supports Astro with SSR, static generation, and hybrid rendering.",
  },
  {
 id: "faq-database-support",
 page: "faq",
 question: "What databases does Diploi support?",
 answer:
      "Diploi supports PostgreSQL, MongoDB, MariaDB, and Redis, plus MinIO for file storage, which can be used as add-ons in any project hosted in Diploi. Each database runs as an isolated service within your deployment, so you don't need a separate database hosting provider.",
  },
  {
 id: "faq-python-fastapi-support",
 page: "faq",
 question: "Can I host Python or FastAPI apps?",
 answer:
      "Yes! Diploi supports Python applications using frameworks like FastAPI, Django, and Flask.",
  },
  {
 id: "faq-nodejs-support",
 page: "faq",
 question: "Does Diploi support Node.js?",
 answer:
      "Yes, and in fact, Node.js was one of our first supported frameworks on Diploi.",
  },
  {
 id: "faq-cloud-dev-environment",
 page: "faq",
 question: "What is a cloud development environment?",
 answer:
      "A cloud development environment (also known as a remote development environment) is a fully configured development setup that runs in the cloud instead of your local machine. With Diploi, each developer gets their own isolated environment with all dependencies pre-installed. You don't need to run anything locally, you can connect your local IDE to the cloud development environment to start coding.",
  },
  {
 id: "faq-no-local-install",
 page: "faq",
 question: "Can I develop without installing anything locally?",
 answer:
      "That's the main purpose of Diploi. Not only do you not need to install anything locally, but you don't even need to have your own IDE to get started. Diploi provides a browser-based IDE. Your code runs in the cloud, and you can switch between projects instantly without any environment conflicts.",
  },
  {
 id: "faq-ide-support",
 page: "faq",
 question: "Which IDEs are supported on Diploi?",
 answer:
      "Besides our built-in browser-based IDE, we have native support for VS Code, Zed, and Cursor. But it's not limited to only those 4 options, you can connect any IDE that supports SSH connections and devcontainers like Windsurf and WebStorm, for example.",
  },
  {
 id: "faq-code-storage",
 page: "faq",
 question: "Where is my code stored, and how does Git integration work?",
 answer:
      "Your code lives on any deployment created inside of your projects, and in your own GitHub repository. Diploi creates a GitHub Action that triggers a CI/CD workflow to update your development, staging, and production environments when new updates are pushed to the repository linked to your project.",
  },
  {
 id: "faq-deploy-application",
 page: "faq",
 question: "How do I deploy my application on Diploi?",
 answer:
      "All applications kick-started in Diploi are deployed online by default and do not require any special configuration. If you have an existing project on GitHub, you can try importing it, to host it online with Diploi, but this feature currently supports Lovable-built projects, Node.js, Next.js, and React. Projects built with other frameworks might require additional configuration.",
  },
  {
 id: "faq-automatic-ssl",
 page: "faq",
 question: "Does Diploi provide automatic SSL certificates?",
 answer:
      "That's right. Every deployment on Diploi automatically gets an SSL certificate, both for Diploi-generated domains and custom domains.",
  },
  {
 id: "faq-push-to-deploy",
 page: "faq",
 question: "How does \"push to deploy\" work?",
 answer:
      "When you push code to your GitHub repository, Diploi automatically triggers a build and deployment pipeline. Your staging or production environment updates within minutes.",
  },
  {
 id: "faq-multiple-environments",
 page: "faq",
 question: "Can I have multiple environments (dev, staging, production)?",
 answer:
      "Of course! You can create as many environments as you need. Each runs independently, with its own configuration and resources.",
  },
  {
 id: "faq-cicd-pipelines",
 page: "faq",
 question: "How are CI/CD pipelines automatically handled?",
 answer:
      "When you create a deployment, you can assign a specific branch. Diploi pre-configures new and imported GitHub projects with a GitHub Action generated based on your project's configuration. This adds a CI/CD pipeline that automatically updates your project's branch's development and staging/production build images whenever you push code.",
  },
  {
 id: "faq-pricing-model",
 page: "faq",
 question: "What is the pricing model of Diploi?",
 answer:
      "Diploi has a usage-based pricing model, where you only pay for the time that your deployment is running and the storage that your deployments use. There's no pricing difference between the deployment stages you create. Pricing depends on the size of the cluster that your deployments use, while storage is charged at a flat rate based on the amount used, regardless of the cluster types you are using.",
  },
  {
 id: "faq-is-diploi-expensive",
 page: "faq",
 question: "Is Diploi expensive?",
 answer:
      "Diploi uses usage-based pricing, so you only pay for what you use. A deployment used for development purposes (running only during work hours) could cost you about €4/month, while a production environment (running 24/7) would start at €21/month for a complete stack with frontend, backend, and database running on an S-size cluster. So it is actually cheaper than other alternatives like Railway or Render for production hosting, and cheaper than other remote development alternatives like GitPod or GitHub Codespaces.",
  },
  {
 id: "faq-cost-examples",
 page: "faq",
 question: "How much does a development or production environment cost?",
 answer:
      "Costs depend on the cluster size, storage needs, and uptime. For example, a size M cluster (2 cores, 8GB RAM) with 10GB storage, used for cloud development 7 hours per workday, costs €9/month. A size S cluster (2 cores, 4GB RAM) with 10GB storage running 24/7 for production would cost €21/month.",
  },
  {
 id: "faq-enterprise-plans",
 page: "faq",
 question: "Are there enterprise plans?",
 answer:
      "Yes, we offer an Enterprise tier with tailored pricing and custom services. Enterprise customers get priority support, migration services, integration assistance, and the ability to add custom components or add-ons to the platform. Contact us at hello@diploi.com for more information.",
  },
  {
 id: "faq-vps-provider",
 page: "faq",
 question: "Is Diploi a VPS provider?",
 answer:
      "No, Diploi is a fully managed development and deployment platform. You cannot choose the OS where your application is deployed, and you do not have configuration access to the server's settings. Diploi handles all infrastructure management for you.",
  },
  {
 id: "faq-ssh-access",
 page: "faq",
 question: "Do I get SSH access to the servers where my project is hosted?",
 answer:
      "Yes, you can access your deployment's cloud development environment, components, and add-ons using SSH. But keep in mind that when you use Diploi, you don't need to run start commands manually to launch your application online.",
  },
  {
 id: "faq-single-tenant",
 page: "faq",
 question: "Could I use Diploi to run single-tenant applications?",
 answer:
      "Yes, Diploi is particularly great for single-tenancy use cases. Since your application runs each deployment in an isolated infrastructure, you could have one core production deployment to serve users in a multi-tenant environment, and when you need to create a single-tenant version for a different client, you can clone your production deployment, reset its databases, and have a clean deployment ready in record time. All with the necessary infrastructure fully provisioned, running completely isolated from the rest of your deployments and other users.",
  },
  {
 id: "faq-components-vs-addons",
 page: "faq",
 question: "What's the difference between components and add-ons?",
 answer:
      "Components are the application layers your users interact with, like frontends (React, Next.js, Astro) and backends (Node.js, Python, etc.). Add-ons are supporting services like databases (PostgreSQL, MongoDB), caching (Redis), and file storage (MinIO) that are only accessible by the components that are part of the same deployment.",
  },
  {
 id: "faq-production-traffic",
 page: "faq",
 question: "Can Diploi handle production traffic?",
 answer:
      "Yes! Diploi provides production-grade infrastructure suitable for real workloads. For very high-traffic applications, we're developing horizontal scaling (see our roadmap). For most applications, Diploi's single-node Kubernetes clusters provide excellent performance and reliability.",
  },
  {
 id: "faq-data-location",
 page: "faq",
 question: "Where is my data stored?",
 answer:
      "Your data is stored in AWS datacenters in Ireland, Europe. We are working on multi-region support.",
  },
  {
 id: "faq-team-collaboration",
 page: "faq",
 question: "How do teams collaborate on Diploi?",
 answer:
      "On Diploi, each project can have independent development deployments for each developer. You can share a link to an environment and even access a teammate's environment directly. Environments can be cloned and shared for previewing purposes.",
  },
  {
 id: "faq-developer-onboarding",
 page: "faq",
 question: "How fast can I onboard a new developer?",
 answer:
      "It might sound unbelievable, but you can onboard a new developer in about 30 seconds. New team members simply authenticate with GitHub, and they immediately have access to fully configured development environments. They can start contributing code on day one.",
  },
  {
 id: "faq-client-handoff",
 page: "faq",
 question: "Can I hand off projects to clients easily?",
 answer:
      "Yes, Diploi is ideal for agencies and freelancers working with clients. Each project is self-contained with its own repository and infrastructure configuration and it's easy to transfer ownership to clients without any DevOps handoff or infrastructure migration required.",
  },
  {
 id: "faq-move-off-diploi",
 page: "faq",
 question: "What if I want to move off Diploi later?",
 answer:
      "You can move your project out of Diploi at any point. All Diploi projects can be run on any VPS or managed hosting service, either by running each component via terminal commands (e.g., npm run start), or by using the Dockerfiles that Diploi generates for your app's components.",
  },
  {
 id: "faq-component-limits",
 page: "faq",
 question: "Is there a limit to how many components or add-ons a project can have?",
 answer:
      "There is no limit, so you can have all supported frameworks and databases. The only limitation is the computing power required by a deployment to handle a large stack of components and add-ons.",
  },
  {
 id: "faq-sharing-application",
 page: "faq",
 question: "Can I share my application with others for testing?",
 answer:
      "Yes, each environment has a unique URL you can share, so others can access and test your app instantly.",
  },
  {
 id: "faq-monitoring-logs",
 page: "faq",
 question: "How do I monitor logs or production status?",
 answer:
      "Diploi provides real-time logging for each component and add-on. From the deployment's dashboard, you have access to graphs showing resource usage and health status. Development deployments also include a Diploi CLI for programmatic log tracking.",
  },
  {
 id: "faq-stack-builder",
 page: "faq",
 question: "What is the Stack Builder in Diploi?",
 answer:
      "Stack Builder is a tool for scaffolding new apps. It generates boilerplate code and project structure for common stacks. Pick your frameworks and databases, and Stack Builder creates a ready-to-launch application template so you can begin coding immediately.",
  },
];
