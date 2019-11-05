/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `House of Giants`,
    organization: {
      name: `House of Giants LLC`,
      url: `https://houseofgiants.com`,
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
}
