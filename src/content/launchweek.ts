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
		description: 'We have a lot of new features coming up! Stay tuned.',
	},
	days: [
		{
			name: 'Monday',
			released: false,
			description:
				'',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: '',
					description: '',
					links: [
						{ label: '', href: '' },
						{ label: '', href: '' },
					],
					tag: '',
				},
			],
		},
		{
			name: 'Tuesday',
			released: false,
			description:
				'',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: '',
					description: '',
					links: [
						{ label: '', href: '' },
						{ label: '', href: '' },
					],
					tag: '',
				},
				{
					componentId: '',
					description: '',
					links: [
						{ label: '', href: '' },
						{ label: '', href: '' },
					],
					tag: '',
				},
			],
		},
		{
			name: 'Wednesday',
			released: false,
			description:
				'',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: '',
					description:
						'',
					links: [
						{ label: '', href: '' },
						{ label: '', href: 'n' },
					],
					wide: true,
					tag: '',
				},
			],
		},
		{
			name: 'Thursday',
			released: false,
			description:
				'',
			backgroundIcon: 'heart',
			items: [
				{
					componentId: '',
					description:
						'',
					links: [
						{ label: '', href: '' },
						{ label: '', href: '' },
					],
					wide: true,
					tag: '',
				},
			],
		},
		{
			name: 'Friday',
			released: false,
			description:
				'',
			backgroundIcon: 'rocket',
			items: [
				{
					componentId: '',
					description:
						'',
					links: [{ label: '', href: '' }],
					wide: true,
					tag: 'New',
				},
			],
		},
	],
};

