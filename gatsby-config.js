module.exports = {
  siteMetadata: {
    title: 'Peña Bros Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/services`,
        name: 'services'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/reviews`,
        name: 'reviews'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/homeSlides`,
        name: 'homeSlides'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/aboutUsSlides`,
        name: 'aboutUsSlides'
      },
    },
  ],
}
