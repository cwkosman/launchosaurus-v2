module.exports = {
  title: 'Launch Welcome Kit',
  tagline: '🚀 Preparing to put merchants into space 🚀',
  url: 'https://launchosaurus-v2.cwkosman.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'shopify', // Usually your GitHub org/user name.
  projectName: 'launchosaurus-v2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Launch Welcome Kit',
      logo: {
        alt: 'Launch Welcome Kit Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/index', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Welcome',
              to: 'docs/index',
            },
            {
              label: 'Plan',
              to: 'docs/plan/plan',
            },
            {
              label: 'Implement',
              to: 'docs/implement/implement',
            },
            {
              label: 'Test',
              to: 'docs/test/test',
            },
            {
              label: 'Launch',
              to: 'docs/launch/launch',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Help Center', // string - the label that should be displayed.
              href: 'https://help.shopify.com' // string - the target URL.
            },
            {
              label: 'Developers', // string - the label that should be displayed.
              href: 'https://shopify.dev' // string - the target URL.
            },
            {
              label: 'Partner Academy', // string - the label that should be displayed.
              href: 'https://www.shopify.ca/partners/academy' // string - the target URL.
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Launch Blog',
              href: 'blog',
            },
            {
              label: 'Plus Blog',
              href: 'https://www.shopify.ca/enterprise',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ShopifyPlus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shopify, Inc. Built with Docusaurus.`,
    },
    disableDarkMode: true,
    googleAnalytics: {
      trackingID: 'UA-130314353-4',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cwkosman/launchosaurus-v2/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
