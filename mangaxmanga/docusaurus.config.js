module.exports = {
  title: 'Manga x Manga', //title in hero banner
  tagline: 'A Manga Reader App for iOS Devices (11.0+) and MacOS (Catalina+).', //secondary title in hero banner
  url: 'https://mangaxmanga.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'mangaxmanga', // Usually your GitHub org/user name.
  projectName: 'mangaxmanga', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Manga x Manga', //title in nav bar
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        /*{
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },*/
        {
          href: 'https://www.patreon.com/mangaxmanga',
          label: 'Patreon',
          position: 'right'
        },
        {to: 'docs/roadmap/', label: 'Roadmap', position: 'right'},
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
        {
          label: 'Links',
          position: 'right', // or 'right'
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/725782618968293447/725782619433861152',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/mangaxmanga/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mangaxmanga1',
            }
            // ... more items
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },*/
        {
          title: 'Support',
          items: [
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/mangaxmanga'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/725782618968293447/725782619433861152',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/mangaxmanga/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mangaxmanga1',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Privacy Policy',
              to: '/static/privacy_policy.html',
            }/*,
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },*/
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chubimaukinations LLC. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
