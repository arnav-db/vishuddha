module.exports = {
  siteMetadata: {
    title: `Vishuddha`,
    siteUrl: `https://github.com/venusuranus/vishuddha`,
    description: `Unadulterated Hindi`,
    author: `@venusuranus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vishuddha`,
        short_name: `vishuddha`,
        start_url: `/`,
        background_color: `#e74c3c`,
        theme_color: `#e74c3c`,
        display: `minimal-ui`,
        icon: `src/images/plexus-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-slug-field",
      options: {
        filter: { internal: { type: "HindiCsv" } },
        source: "Word",
        fieldName: "slug",
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
