export interface LaunchweekItemLink {
	label: string;
	href: string;
}

export interface LaunchweekItem {
	componentId?: string;
	customName?: string;
	customIconBase64?: string;
	description: string;
	links: LaunchweekItemLink[];
	wide?: boolean;
	tag?: string;
}

export interface LaunchweekDay {
	name: string;
	released: boolean;
	description: string;
	items: LaunchweekItem[];
	backgroundIcon: 'rocket' | 'heart';
}

export interface LaunchweekData {
	id: string;
	hero: { title: string; description: string };
	days: LaunchweekDay[];
}

export const launchweek2025: LaunchweekData = {
	id: '2025',
	hero: {
		title: 'Launch Week 2025',
		description: 'In 2025 we rolled out new features and components to make web development more magical and smooth!',
	},
	days: [
		{
			name: 'Monday',
			released: true,
			description:
				'Day one brings two big additions: <a href="/component/laravel">Laravel</a> and <a href="/component/deno">Deno</a>. Laravel introduces <strong>official PHP support on Diploi</strong>, while Deno expands our JS/TS roster with powerful package management and fine-grained process permissions.',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: 'laravel',
					description: 'The PHP framework for web artisans. Running on FrankenPHP.',
					links: [
						{ label: 'Launch Laravel', href: '/component/laravel' },
						{ label: 'Read guide', href: '/blog/hosting_laravel_apps' },
					],
					tag: 'New',
				},
				{
					componentId: 'deno',
					description: 'The next-generation JavaScript runtime. Now available with a single-click.',
					links: [
						{ label: 'Launch Deno', href: '/component/deno' },
						{ label: 'Read guide', href: '/blog/hosting_deno_apps' },
					],
					tag: 'New',
				},
			],
		},
		{
			name: 'Tuesday',
			released: true,
			description:
				'It\'s Python\'s turn! Day two brings <strong>two of the most popular Python web frameworks</strong>, <a href="/component/fastapi">FastAPI</a> and <a href="/component/flask">Flask</a>, to Diploi. Launch them with a single-click and start building faster than ever.',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: 'fastapi',
					description: 'Modern, fast, web framework for building APIs with standard type hints.',
					links: [
						{ label: 'Launch FastAPI', href: '/component/fastapi' },
						{ label: 'Read guide', href: '/blog/hosting_fastapi_apps' },
					],
					tag: 'New',
				},
				{
					componentId: 'flask',
					description: 'Lightweight, easy, scalable WSGI web application framework.',
					links: [
						{ label: 'Launch Flask', href: '/component/flask' },
						{ label: 'Read guide', href: '/blog/hosting_flask_apps' },
					],
					tag: 'New',
				},
			],
		},
		{
			name: 'Wednesday',
			released: true,
			description:
				'Day three expands Diploi\'s advanced toolkit with <a href="/component/n8n">n8n</a>. Build powerful automations, schedule tasks seamlessly, and take advantage of <strong>custom nodes right out of the box</strong>.',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: 'n8n',
					description:
						'Build with the precision of code or the speed of drag-n-drop. n8n gives you more freedom to implement multi-step AI agents and integrate apps than any other tool.',
					links: [
						{ label: 'Launch n8n', href: '/component/n8n' },
						{ label: 'Read guide', href: '/blog/hosting_n8n' },
					],
					wide: true,
					tag: 'New',
				},
			],
		},
		{
			name: 'Thursday',
			released: true,
			description:
				'Day four brings our biggest component yet: <a href="/component/supabase">Supabase</a>! With a full Postgres database, built-in authentication, powerful storage, and edge functions, Supabase makes it effortless to add <strong>a complete backend to your project</strong>. From idea to production, you now have everything you need with zero-setup.',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: 'supabase',
					description:
						'Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.',
					links: [
						{ label: 'Launch Supabase', href: '/component/supabase' },
						{ label: 'Read guide', href: '/blog/hosting_supabase' },
					],
					wide: true,
					tag: 'New',
				},
			],
		},
		{
			name: 'Friday',
			released: true,
			description:
				'We\'re closing Launch Week with something special: <strong>direct imports from Lovable</strong>. <a href="https://lovable.dev/" target="_blank">Lovable</a> is perfect for vibe-coding, while Diploi gives you the power to take projects further. <strong>Just connect your Lovable project to GitHub, select it in Diploi</strong>, and you\'re ready to go. You can even keep working across both platforms at the same time.',
			backgroundIcon: 'heart',
			items: [
				{
					componentId: 'lovable',
					description:
						'Official support for Lovable repositories. When logged into Diploi, create a new project and select "Import Repository" to get started.',
					links: [{ label: 'Read guide', href: '/blog/importing_from_lovable_and_github' }],
					wide: true,
					tag: 'New',
				},
			],
		},
	],
};

export const launchweek2026: LaunchweekData = {
	id: '2026',
	hero: {
		title: 'Launch Week 2026',
		description: 'We have a lot of new features coming up! From the 30th of March to the 3rd of April.',
	},
	days: [
		{
			name: 'Monday',
			released: true,
			description:
				'<strong>Automagically import any existing app:</strong> If we support the technologies you use, then you can host it and without configuring anything. So if you have Full-stack apps + database(s), Static websites, Laravel projects, Python based APIs, etc. You can try importing your own projects now, all you need is a GitHub account.',
			backgroundIcon: 'heart',
			items: [
				{
					componentId: '',
					description: 'Host any of your existing apps',
					links: [
						{ label: 'Try importing now', href: '/import' },
					],
					wide: true,
					tag: 'Improved ✨',
				},
			],
		},
		{
			name: 'Tuesday',
			released: true,
			description:
				'In our mission to help coders ship faster, we added <strong>Starter Kits</strong>, which give you a complete app scaffold, so you can begin your next idea with a pre-configured applications, ready to launch instantly on Diploi.',
			backgroundIcon: 'rocket',
			items: [
				{
					customName: 'Chat App',
					description:
						'A fully setup chat application, that uses Next.js and Supabase, all wired and ready to use.',
					links: [
						{ label: 'Chat app', href: '/starter-kit/chat' },
						{ label: 'Docs', href: 'https://docs.diploi.com/building/starter-kits/chat-app' },
						{ label: 'Repo', href: 'https://github.com/diploi/starter-chat' },
					],
					wide: true,
					tag: 'Updated',
				},
				{
					customName: 'Web App',
					description:
						'Ready-to-launch scaffold that uses React and Supabase.',
					links: [
						{ label: 'Web app', href: '/starter-kit/web-app' },
						{ label: 'Docs', href: 'https://docs.diploi.com/building/starter-kits/web-app' },
						{ label: 'Repo', href: 'https://github.com/diploi/starter-web-app' },
					],
					wide: true,
					tag: 'Updated',
				},
				{
					customName: 'Collaborative Drawing App',
					description:
						'An app that uses React+Vite, Supabase and the Refine framework, with realtime features.',
					links: [
						{ label: 'Chat app', href: '/starter-kit/refine-pixels' },
						{ label: 'Docs', href: 'https://docs.diploi.com/building/starter-kits/drawing-app' },
						{ label: 'Repo', href: 'https://github.com/diploi/starter-refine-pixels' },
					],
					wide: true,
					tag: 'Updated',
				},
				{
					customName: 'File2ai',
					description:
						'A minimal application to transcribe images, audio and video files to plain text. It comes pre-configured with an LLM out of the box.',
					links: [
						{ label: 'File2ai', href: '/starter-kit/file2ai' },
					],
					wide: true,
					tag: 'New',
				},
			],
		},
		{
			name: 'Wednesday',
			released: true,
			description:
				'Agents have been the focus for 2026 so far, and a big factor has been the release of <strong>OpenClaw</strong>. It is an incredible tool! But it is a bit of a hassle to get it safely deployed on a VPS, which we could let stand! We added OpenClaw support in Diploi as the easiest way to host, available anywhere, with <strong>gpt-4.1 nano pre-configured and browser terminal to skip having to use SSH</strong>, all out of the box.',
			backgroundIcon: 'heart',
			items: [
				{
					customName: 'OpenClaw',
					description:
						'A self-hosted AI assistant that connects to WhatsApp, Telegram, Slack, Discord, and more. Launches with a pre-configured AI model via the Diploi AI Gateway, to avoid using API keys.',
					links: [
						{ label: 'Launch OpenClaw', href: '/starter-kit/openclaw' },
						{ label: 'Read guide', href: '/blog/hosting_openclaw' },
						{ label: 'Documentation', href: 'https://docs.diploi.com/building/starter-kits' },
					],
					wide: true,
					tag: 'Starter Kit 🦞',
				},
			],
		},
		{
			name: 'Thursday',
			released: true,
			description:
				'If you use Python for web development, this is for you! We recently added dynamic runtimes to our Python based components, which means that now you can import your existing projects without worrying about the Python version, since now the import system will dynamically load the right version.',
			backgroundIcon: 'rocket',
			items: [
				{
					customName: 'Dynamic Python Runtimes',
					description:
						'A better way to handle the Python versions of your projects, to help you focus on building code, rather than worrying about Dockerfiles commands.',
					links: [
						{ label: 'Django', href: '/component/django' },
						{ label: 'FastAPI', href: '/component/fastapi' },
						{ label: 'Flask', href: '/component/flask' },
						{ label: 'Import an existing Python app', href: '/import' },
					],
					wide: true,
					tag: 'Improved 🐍',
				},
			],
		},
		{
			name: 'Friday',
			released: true,
			description:
				'Major updates to all components and add-ons available on Diploi!',
			backgroundIcon: 'heart',
			items: [
				{
					description:
						'This concludes our first LaunchWeek for 2026. Join us on Discord and share your feedback, we want to know what we can do better.',
					links: [
						{ label: 'PostgreSQL Version Upgrade', href: 'https://www.postgresql.org/docs/release/' },
						{ label: 'n8n updated to latest', href: '/component/n8n' },
						{ label: 'Flask internal version release v.3.1.3-uv', href: '/component/flask' },
						{ label: 'New Python runtime, internal version v04.2026', href: 'https://github.com/diploi/component-python' },
						{ label: 'Support for new Django v6.0.3', href: '/component/django' }
					],
					wide: true,
					tag: 'Updated 🌠',
				},
			],
		},
	],
};

