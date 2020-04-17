/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Apollo',
    description: 'Explore Moon, Forget your daily routine.',
    author: '@Leta',
    data: {
      name: 'Leta',
      age: 23,
    },
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
  ],
};
