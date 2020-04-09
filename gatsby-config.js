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
    data: ['item1', 'item2'],
  },

  plugins: ['gatsby-plugin-typescript', 'gatsby-plugin-sass', `gatsby-plugin-styled-components`],
};
