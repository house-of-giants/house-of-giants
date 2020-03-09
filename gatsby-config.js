/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    defaultTitle: "House of Giants",
    defaultTitleTemplate: "%s | House of Giants",
    organization: {
      name: `House of Giants LLC`,
      url: `https://houseofgiants.com`,
    },
    nav: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'About Us',
        slug: '/about-us',
      },
      {
        name: 'Work',
        slug: '/work',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
}
