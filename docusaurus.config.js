/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Kabocha docs",
  tagline: "Documentation for Kabocha",
  url: "https://docs.kabocha.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  favicon: "img/favicon.ico",
  organizationName: "kabocha-network", // Usually your GitHub org/user name.
  projectName: "kabocha-network.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Kabocha",
      logo: {
        alt: "Kabocha logo",
        src: "img/tg_main.png",
        href: "https://kabocha.network",
      },
      items: [
        {
          to: "/getting-started",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/kabocha-network/kabocha-network.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Info",
          items: [
            {
              label: "Kabocha.network web",
              href: "https://kabocha.network",
            },
            {
              label: "New Futures NFT",
              href: "https://new-futures.kabocha.network",
            },
            {
              label: "Edgeware",
              href: "https://edgewa.re",
            },
            {
              label: "Network Publiks",
              href: "https://publike.kabocha.network",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/heykabocha",
            },
            {
              label: "Telegram (implementers chat)",
              href: "https://t.me/kabochaofficial",
            },
          ],
        },
        {
          title: "Github",
          items: [
            {
              label: "Specs GitHub",
              href: "https://github.com/kabocha-network/kabocha-spec",
            },
            {
              label: "Docs GitHub",
              href: "https://github.com/Kabocha-network/kabocha-docs",
            },
            {
              label: "Tools GitHub",
              href: "https://github.com/Kabocha-network/kabocha-tools",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kabocha Team.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/kabocha-network/kabocha-network.github.io/edit/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
