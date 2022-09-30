// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'The Basics',
	tagline: 'Multi-Language Cookbook & Training Portal',
	url: 'https://noxasaxon.github.io',
	baseUrl: '/the-basics/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'noxasaxon', // Usually your GitHub org/user name.
	projectName: 'noxasaxon', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},
	// themes: ['@docusaurus/theme-search-algolia'],
	// themeConfig: { algolia: {} },

	scripts: [
		{ src: '/the-basics/_pagefind/pagefind-ui.js', type: 'text/javascript' },
		{ src: '/the-basics/assets/js/pagefind_script.js', type: 'text/javascript' }
	],

	stylesheets: ['/the-basics/_pagefind/pagefind-ui.css'],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/noxasaxon/the-basics/tree/main/docs-site/docs/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/noxasaxon/the-basics/tree/main/docs-site/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
		// [
		// 	require.resolve('@cmfcmf/docusaurus-search-local'),
		// 	{
		// 		// Options here
		// 	}
		// ]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'The Basics',
				logo: {
					alt: 'My Site Logo',
					src: 'img/docusaurus.png'
				},
				items: [
					// {
					// 	type: 'doc',
					// 	docId: 'tutorial/intro',
					// 	position: 'left',
					// 	label: 'Tutorial'
					// },
					// { to: '/blog', label: 'Blog', position: 'left' },
					{
						type: 'doc',
						docsPluginId: 'cookbook',
						docId: 'intro',
						position: 'left',
						label: 'Cookbook'
					},
					{
						type: 'doc',
						docsPluginId: 'python',
						docId: 'intro',
						position: 'left',
						label: 'Python'
					},
					{
						type: 'doc',
						docsPluginId: 'typescript',
						docId: 'intro',
						position: 'left',
						label: 'Typescript'
					},
					{
						type: 'doc',
						docsPluginId: 'rust',
						docId: 'intro',
						position: 'left',
						label: 'Rust'
					},
					{
						type: 'doc',
						docsPluginId: 'go',
						docId: 'intro',
						position: 'left',
						label: 'Go'
					},
					{
						href: 'https://github.com/noxasaxon/the-basics',
						label: 'GitHub',
						position: 'right'
					},
					{
						type: 'search',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Cookbook',
								to: '/cookbook/intro'
							}
							// {
							// 	label: 'Tutorial',
							// 	to: '/docs/tutorial/intro'
							// }
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Github Discussions',
								href: 'https://github.com/noxasaxon/the-basics/discussions'
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/noxasaxon'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/noxasaxon/the-basics'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} The Basics, Inc. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['rust']
			}
		}),

	plugins: [
		// [
		// 	'docusaurus-plugin-module-alias',
		// 	{
		// 		alias: {
		// 			'@root/': path.resolve(__dirname, '../')
		// 		}
		// 	}
		// ],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'cookbook',
				path: '../cookbook',
				routeBasePath: '/cookbook',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'python',
				path: '../python',
				routeBasePath: '/python',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'typescript',
				path: '../typescript',
				routeBasePath: '/typescript',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'rust',
				path: '../rust',
				routeBasePath: '/rust',
				sidebarPath: require.resolve('./sidebars.js')
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'go',
				path: '../go',
				routeBasePath: '/go',
				sidebarPath: require.resolve('./sidebars.js')
			}
		]

		// [
		// 	'docusaurus-plugin-remote-content',
		// 	{
		// 		// options here
		// 		name: 'some-content', // used by CLI, must be path safe
		// 		sourceBaseUrl:
		// 			'https://raw.githubusercontent.com/rust-lang-nursery/rust-cookbook/master/src/', // the base url for the markdown (gets prepended to all of the documents when fetching)
		// 		outDir: '../cookbook/nursery', // the base directory to output to.
		// 		// documents: ['my-file.md', 'README.md'] // the file names to download
		// 		documents: ['file/dir/duplicate-name.md']
		// 	}
		// ]
	]
};

module.exports = config;
