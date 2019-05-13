module.exports = {
  siteMetadata: {
    title: 'Peña Bros Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peña Bros`,
        short_name: `pena-bros`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: 'standalone',
        icon: `src/assets/pena-favicon.png`,
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rxn53wuu',
        dataset: 'production',
      },
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
