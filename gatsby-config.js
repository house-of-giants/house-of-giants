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
        name: 'About Us',
        slug: '/about-us',
      },
      {
        name: 'Work',
        slug: '/work',
      },
      {
        name: 'Contact',
        slug: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
}
