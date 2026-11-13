import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Release version shown in the navbar and on the homepage.
// Keep in sync with XCharts/Assets/XCharts/package.json when publishing.
const XCHARTS_VERSION = '3.16.0';

const config: Config = {
  title: 'XCharts',
  titleDelimiter: '·',
  tagline: 'Unity 数据可视化图表库',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xcharts-team.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XCharts-Team', // Usually your GitHub org/user name.
  projectName: 'XCharts', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  customFields: {
    version: XCHARTS_VERSION,
  },

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

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: '/docs',
        searchBarShortcut: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 60,
      },
    ],
  ],

  themeConfig: {
    image: 'img/xcharts-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'XCharts, Unity, UGUI, 图表, 数据可视化, chart, unity chart, unitypackage',
      },
    ],
    navbar: {
      title: 'XCharts',
      logo: {
        alt: 'XCharts Logo',
        src: 'img/logo-mark.png',
        srcDark: 'img/logo-mark-dark.png',
      },
      items: [
        {
          to: '/docs/changelog#v3160',
          label: `v${XCHARTS_VERSION}`,
          position: 'left',
          className: 'navbar-version',
        },
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
            {label: 'Tutorial', to: '/docs/tutorial01'},
            {label: 'Configuration', to: '/docs/configuration'},
            {label: 'API Reference', to: '/docs/api'},
            {label: 'FAQ', to: '/docs/faq'},
          ],
        },
        {
          title: 'Charts',
          items: [
            {label: 'Extra Charts', to: '/docs/category/extra-charts'},
            {label: 'Extra UI', to: '/docs/ui'},
            {label: 'Changelog', to: '/docs/changelog'},
            {label: 'About XCharts', to: '/docs/about'},
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/XCharts-Team/XCharts/issues',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/monitor1394/unity-ugui-XCharts',
            },
            {
              label: 'Support',
              to: '/docs/support',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {
              label: 'GitHub',
              href: 'https://github.com/XCharts-Team/XCharts',
            },
            {
              label: 'Releases',
              href: 'https://github.com/XCharts-Team/XCharts/releases',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XCharts. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
