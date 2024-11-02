import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'XCharts',
  tagline: 'tagline',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XCharts-Team', // Usually your GitHub org/user name.
  projectName: 'XCharts', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/XCharts-Team/XCharts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/XCharts-Team/XCharts',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/xcharts-social-card.png',
    navbar: {
      title: 'XCharts',
      logo: {
        alt: 'XCharts Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/changelog#v3120', label: 'v3.12.0', position: 'left' },
        // { type: 'search', position: 'right' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
        },
        { to: '/examples', label: 'Demo', position: 'right' },
        { to: '/blog', label: 'Blog', position: 'right' },
        { to: '/docs/support', label: 'Support', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/XCharts-Team/XCharts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/tutorial01',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'QQ Group',
            //   href: 'https://stackoverflow.com/questions/tagged/XCharts',
            // },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/XCharts',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/monitor1394',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Gitee',
              href: 'https://gitee.com/monitor1394/unity-ugui-XCharts',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/XCharts-Team/XCharts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XCharts, Inc. Built with Docusaurus.`,
    },
    algolia: {
      appId: '6YGEX22RUU',
      apiKey: '15066da00423facdeb39bd6e082db68c',
      indexName: 'xcharts-teamio',
      // See https://docusaurus.io/docs/search#contextual-search
      contextualSearch: true,
      // searchParameters: {
      //   facetFilters: [`language:${DefaultLocale}`]
      // },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
