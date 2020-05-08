/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "House of Giants",
    titleTemplate: "%s | House of Giants",
    description: "Small web app development shop based out of Denver, CO.",
    image: "/hog-social.jpg",
    twitterUsername: "@magnificode",
    siteUrl: 'https://houseofgiants.com',
    organization: {
      name: `House of Giants LLC`,
      url: `https://houseofgiants.com`,
    },
    nav: [
      {
        name: 'About Us',
        slug: 'about',
      },
      {
        name: 'Work',
        slug: 'work',
      },
      {
        name: 'Contact',
        slug: 'contact',
      },
    ],
    work: [
      {
        name: 'Sheryl Glubok',
        img: 'https://compassionate-lamarr-33dd20.netlify.com/sheryl-stretch.jpg',
        url: 'https://sherylglubok.com',
        services: ['Experimental Design', 'Development', 'Gatsby', 'React', 'Strategy']
      },
      {
        name: 'The Spoon',
        img: 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
        url: 'https://thespoon.tech',
        services: ['WordPress', 'Development', 'Strategy', 'Consulting']
      },
      {
        name: 'NHRA',
        img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
        url: 'https://humanresources.org',
        services: ['WordPress', 'Development', 'Strategy', 'Consulting']
      }
    ]
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://houseofgiants.com',
          sitemap: 'https://houseofgiants.com/sitemap.xml',
          policy: [
            { userAgent: 'Twitterbot', allow: '/'},
            { userAgent: '*', allow: '/' }
          ]
        }
      }
  ],
}
