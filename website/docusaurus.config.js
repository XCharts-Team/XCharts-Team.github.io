const path = require('path');

const versions = require('./versions.json');

const variablePlugin = require('./plugins/remark-plugins/variables');
const fragmentPlugin = require('./plugins/remark-plugins/fragments');
const utilsExtensionPlugin = require("./plugins/docusaurus-utils-extends");
// const variables = require('./variables');

const versionpaths = [__dirname + '/docs']
for (const version of versions) {
  versionpaths.push(__dirname + `/versioned_docs/version-${version}`)
}

const presets = {
  dotorg: {
    url: 'http://XCharts-Team.github.io',
    baseUrl: '/en',
    blogUrl: '/en/blog',
    defaultLocale: 'en',
  },
  dotcn: {
    url: 'http://XCharts-Team.github.io',
    baseUrl: '/',
    blogUrl: '/blog',
    defaultLocale: 'zh-Hans',
  },
};

const chosenPreset = process.env.PRESET || 'dotcn';


// For i18n
const DefaultLocale = process.env.WRITING_TRANSLATION ? 'en' : presets[chosenPreset].defaultLocale;
const mapLocaleCodeToCrowdin = (locale) => {
  switch (locale) {
    case 'zh-Hans':
      return 'zh-CN';
    case 'fr-FR':
      return 'fr';
    default:
      return locale;
  }
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'XCharts',
  tagline: 'A charting and data visualization library for Unity.',
  url: presets[chosenPreset].url,
  baseUrl: presets[chosenPreset].baseUrl,
  // trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/black_or_white.png',
  organizationName: 'XCharts-Team',
  projectName: 'XCharts',
  plugins: [
    'docusaurus-plugin-sass',
    async function myPlugin() {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    utilsExtensionPlugin,
    path.resolve(__dirname, 'plugins/docusaurus-plugin-hotjar'),
    [
      path.resolve(__dirname, 'plugins/autoapi-plugin'),
      {
        path: path.resolve(__dirname, 'src/pages/api'),
        include: '**/*.html',
        route: 'api/',
        allowVersions: versions,
        current: 'master',
      },
    ],
    [
      path.resolve(__dirname, 'plugins/blog-enhance-plugin'),
      {
        postsPerPage: 10,
        blogTitle: 'XCharts Blogs'
      }
    ],
    [
      path.resolve(__dirname, 'plugins/blog-enhance-plugin'),
      {
        id: 'newsletter',
        postsPerPage: 10,
        path: 'newsletter',
        routeBasePath: 'newsletter',
        blogTitle: 'XCharts Newsletter',
        blogDescription: 'Newsletter',
        showReadingTime: false,
      }
    ],
    [
      path.resolve(__dirname, 'plugins/docs-enhance-plugin'),
      {
        // `Docs-only` mode, blocked by bug https://github.com/facebook/docusaurus/issues/4967
        routeBasePath: '/docs',
        path: 'docs',
        editUrl: ({ locale, versionDocsDirPath, docPath }) => {
          // here we enforce contributors to not be able to edit versioned docs
          // also redirect them to the main repository
          return `https://github.com/XCharts-Team/XCharts/edit/master/docs/${docPath}`;
        },
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        versions: {
          current: {
            label: 'master',
            path: 'master',
          },
        },
        remarkPlugins: [
          [variablePlugin, {
            data: (path) => {
              if (!path) return {}
              for (const item of versionpaths) {
                if (path.startsWith(item)) {
                  return require(item + '/variables')
                }
              }
              return {}
            }, fail: false
          }],
          [
            fragmentPlugin,
            {
              prefix: 'fragments',
              fail: false,
              baseUrl: (path) => {
                if (!path) return __dirname + '/docs/fragments'
                for (const item of versionpaths) {
                  if (path.startsWith(item)) {
                    return item + '/fragments'
                  }
                }
                return __dirname + '/docs/fragments'
              },
            },
          ],
        ],
      }
    ],
  ],
  i18n: {
    defaultLocale: DefaultLocale,
    locales: ['zh-Hans', 'en'],
  },
  themeConfig: {
    hideableSidebar: true,
    prism: {
      defaultLanguage: 'python',
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    hotjar: {
      siteId: '2765142',
    },
    navbar: {
      title: null,
      hideOnScroll: false,
      // style: 'dark',
      logo: {
        alt: 'XCharts',
        src: 'img/black_logo.png',
        srcDark: 'img/white_logo.png',
        href: 'https://github.com/XCharts-Team/XCharts',
      },
      items: [
        {
          to: '/docs',
          position: 'right',
          label: 'Doc Home',
          className: 'animated-anchor-link',
        },
        {
          label: 'Resources',
          position: 'right',
          items: [
            {
              to: '/blog',
              label: 'Blogs',
            },
            {
              to: '/blog',
              label: 'Blogs',
            },
          ],
        },
        {
          label: 'Community',
          position: 'right',
          items: [
            {
              to: '/community',
              label: 'Community',
              activeBaseRegex: '/community/',
            },
            {
              to: '/acknowledgments',
              label: 'Acknowledgments',
            },
          ],
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            // {to: '/versions', label: 'All versions'}
          ],
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Community',
              to: '/community',
            },
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'Forum',
              href: 'https://github.com/XCharts-Team/XCharts',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              href: 'https://github.com/XCharts-Team',
            },
            {
              label: 'Careers',
              href: 'https://github.com/XCharts-Team',
            },
            {
              label: 'Contact',
              href: 'https://github.com/XCharts-Team',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Cookie Policy',
              href: 'https://github.com/XCharts-Team',
            },
            {
              label: 'Privacy Policy',
              href: 'https://github.com/XCharts-Team/XCharts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XCharts Technology, Inc.`,
    },
    algolia: {
      appId: '6NDEOARB8Z',
      apiKey: '423ce169fbf3df5464895dc686a697b0',
      indexName: 'XCharts',
      // See https://docusaurus.io/docs/search#contextual-search
      contextualSearch: true,
      // searchParameters: {
      //   facetFilters: [`language:${DefaultLocale}`]
      // },
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      },
    },
  },
  themes: [path.join(__dirname, './plugins/docusaurus-theme-extends/src')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        gtag: {
          trackingID: 'G-9K17QVGTR6',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    blogUrl: presets[chosenPreset].blogUrl,
    localeUrls: {
      'fr-FR': '/fr-FR',
      'zh-Hans': '/',
      'en': '/en',
    },
  }
};
