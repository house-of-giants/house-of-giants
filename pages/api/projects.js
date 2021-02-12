// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const allProjects = [
  {
    name: 'Sheryl Glubok',
    slug: 'sheryl-glubok',
    excerpt: 'Few things are more fun than working with creatives who have an equal passion for their craft. Sheryl&rsquo;s site allowed the House of Giants team to flex those muscles.',
    categories: ['Film', 'Entertainment', 'Production'],
    tech: ['Gatsby', 'React', 'JavaScript', 'Experemental Layout'],
    images: [
      '/sheryl-stretch.jpg',
      '/sheryl-site-1.jpg',
      'https://www.sherylglubok.com/images/fb-team-photo.jpg',
      '/sheryl-site-2.jpg',
      '/sheryl-site-3.jpg'
    ],
    content: '<p>When Sheryl Glubok approached House of Giants, we jumped on the opportunity to work with such an outstanding professional from the <b>film industry</b>. One of the primary goals for this project was to ensure that the experience on the website adequately portrayed Sheryl&lsquo;s creative mindset.</p><p>Through the use of an <b>experimental layout</b>, along with complex <b>movement</b> and <b>interaction</b>, <a href="https://sherylglubok.com/" target="_blank" rel="noopener">sherylglubok.com</a> was built to share Sheryl&lsquo;s story through a unique perspective. Each individual film page has its own look and feel to match the tone of the film itself. Pairing large typography with the imagery created by Sheryl gave House of Giants plenty of creative ammunition to break away from traditional web hierarchy.</p><p>Using <a href="https://www.gatsbyjs.com/" rel="noopener">Gatsby</a> paired with <a href="https://www.netlifycms.org/" rel="noopener">Netlify CMS</a>, we were able to provide Sheryl with the granular control she needed to be able to update content and imagery on her individual film pages, in addition to the ability for her to curate blog posts that follow her journey as a <b>creative filmmaker</b>.</p>',
    featured: true
  },
  {
    name: 'Rebuild Black Business',
    slug: 'rebuild-black-business',
    excerpt: '',
    categories: ['Volunteer', 'Social Equity', 'Open Source'],
    tech: ['Gatsby', 'React', 'API', 'ChakraUI'],
    images: [
      '/rbb-0.jpg',
      '/rbb-1.jpg',
      '/rbb-2.jpg',
      '/rbb-3.jpg'
    ],
    credits: [
      {
        name: 'Thomas de LUZE',
        url: 'https://unsplash.com/@thomasdeluze'
      }
    ],
    content: '<p>In an attempt to help offer our skills as a web development agency to a cause greater than ourselves, House of Giants worked among a team of hundreds of volunteers to create a business registry focused on highlighting and promoting Black Owned businesses across the nation. <a href="https://www.rebuildblackbusiness.com/" target="_blank" rel="noopener">Rebuild Black Business</a> serves as a way for people to discover and help support Black Owned Businesses in their community.</p><p>The House of Giants team was honored to act as the Front End development team leads on this project. Our work included the management of more than 100 individual web development volunteers, along with collaboration between dozens of project managers and business volunteers to facilitate the launch of an MVP product in under two weeks.</p><p>Through rapid prototyping and agile development principles, the HoG team put over 150 volunteer hours over the course of 9 days into the development of this project. RBB features a custom built API to obtain Black Owned Business data that is searchable via the front end application built on <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener">Gatsby</a>.</p><p>The team behind this project are an exceptional group of people striving to be a part of something larger than themselves, and we could not be more humbled by the hard work and passion of those very people. If you’re interested in contributing, join the Rebuild Black Business Discord community at <a href="https://discord.com/invite/rebuild-black-business" target="_blank" rel="noopener">https://discord.com/invite/rebuild-black-business</a>.</p>',
    featured: true
  },
  {
    name: 'Air Methods',
    slug: 'air-methods',
    excerpt: 'It&rsquo;s important that we ensure the usability of a site is as enjoyable as possible, even in a moment where the user may not be particularly overjoyed.',
    categories: ['Aeromedical', 'EMS', 'Medical'],
    tech: ['WordPress', 'PHP', 'Mapbox', 'JavaScript'],
    images: [
      'https://images.unsplash.com/photo-1586097494908-6dbb35137167?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      '/am-1.gif',
      '/am-2.jpg',
      '/am-3.jpg',
      '/am-4.jpg'
    ],
    credits: [
      {
        name: 'Yoshiki 787',
        url: 'https://unsplash.com/@yoshiki787'
      }
    ],
    content: '<p>House of Giants was approached by a local Denver Creative Agency <a href="https://www.groundwrk.com/" target="_blank" rel="noopener">Groundwrk</a> to bring a creative and thoughtful project to fruition for a long established company, <a href="https://airmethods.com"  target="_blank" rel="noopener">Air Methods</a>.</p><p>Air Methods is an American owned aeromedical EMS provider that specializes in providing emergency medical services to between 70,000 and 100,000 patients every year. Air Methods prides themselves on consistent reliable service to people in need, and HoG made sure that this pride comes through on the website.</p><p>One of the key aspects of this project was to ensure that people, who may be in a stressful situation, were provided with straightforward and immediate access to the information they needed. HoG collaborated closely with Groundwrk’s design team to deliver a solution that was straight to the point with a heavy emphasis on responsive, highly functional pieces.</p><p>HoG implemented custom Gutenberg blocks within WordPress, allowing the Air Methods team to easily manage their content within the highly custom design that the Groundwrk team provided. Custom <a href="https://www.mapbox.com/" target="_blank" rel="noopener">Mapbox</a> integrations were leveraged to highlight Air Methods coverage areas, and base locations around the country, giving users an easy glimpse at Air Methods wide coverage area.</p><p>Once Air Methods&lsquo; site was complete, HoG utilized WordPress multisite to generate a site for their sister company, United Rotorcraft. UR provides certified helicopters and air medical equipment to Air Methods, as well as other vendors. HoG worked with Groundwrk’s design team to develop a Build Your Own Aircraft Javascript component which gathers pertinent equipment information from potential leads and sends it directly to UR’s sales team.</p>',
    featured: true
  }
]

export default (req, res) => {
  res.statusCode = 200
  res.json(allProjects)
}
