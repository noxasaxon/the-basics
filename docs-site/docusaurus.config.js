// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'My Site',
	tagline: 'Dinosaurs are cool',
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
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'The Basics',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg'
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
								label: 'Tutorial',
								to: '/docs/tutorial/intro'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus'
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus'
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus'
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
				darkTheme: darkCodeTheme
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
	]
};

module.exports = config;
