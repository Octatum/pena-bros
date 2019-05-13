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
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rxn53wuu',
        dataset: 'production',
        watchMode: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
  ],
};
