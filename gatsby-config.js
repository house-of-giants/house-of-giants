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
    work: [
      {
        name: 'Sheryl Glubok',
        img: 'https://compassionate-lamarr-33dd20.netlify.com/sheryl-stretch.jpg',
        url: 'https://sherylglubok.com',
        services: ['Experemental Design', 'Development', 'Gatsby', 'React', 'Strategy']
      },
      {
        name: 'The Spoon',
        img: 'https://images.unsplash.com/photo-1548103898-96322e3154b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        url: 'https://thespoon.tech',
        services: ['WordPress', 'Development', 'Strategy', 'Consulting']
      }
    ]
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
}
