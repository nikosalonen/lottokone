module.exports = {
  siteMetadata: {
    title: 'Lottokone',
    description: 'Generoi itsellesi lottonumerot. Varma voitto!',
    author: '@nikosalonen',
    siteUrl: 'https://lottokone.fi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    { resolve: 'gatsby-plugin-sitemap' },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://lottokone.fi',
        sitemap: 'https://lottokone.fi/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://lottokone.fi',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Lottokone',
        short_name: 'Lottokone',
        start_url: '/',
        background_color: '#fdb718',
        theme_color: '#fdb718',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-137172555-1',
        // Puts tracking script in the head instead of the body
        head: true,

        // Setting this parameter is also optional
        respectDNT: true,
        cookieDomain: 'lottokone.fi',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
