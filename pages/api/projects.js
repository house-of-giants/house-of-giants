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
    content: '<p>House of Giants took the opportunity to work with <b>Sheryl Glubok</b> as a creative professional looking to stand out from the rest. Sheryl is a visionary within her industry, and as such, the team wanted to ensure that the user experience on the website adequately portrayed Sheryl&rsquo;s creative mindset.</p><p>Through the use of an <b>experimental layout</b>, along with <b>complex movement and interaction</b>, <a href="https://sherylglubok.com" target="_blank" rel="noopener noreferrer">sherylglubok.com</a> was built to share Sheryl&rsquo;s story through a unique perspective. Each individual film page has its own look and feel to match the tone of the film itself. Pairing <b>large typography</b> with the <b>imagery</b> created by Sheryl gave House of Giants plenty of creative ammunition to break away from traditional web hierarchy.</p><p>Using <b>Netlify CMS</b>, we were able to provide Sheryl with the granular control she needed to be able to update content and imagery on her individual film pages, in addition to the ability for her to curate blog posts that follow her journey as a <b>creative filmmaker</b>.</p>',
    featured: true
  },
  {
    name: 'KLiC',
    slug: 'klic',
    excerpt: 'A mobile server rack that ingests raw video, feeds it to AWS, passes it to a Headless WordPress installation and renders it through a NextJS application. Try to cram more technologies into one sentence. I bet you can&rsquo;t.',
    categories: ['Live Streaming', 'Entertainment', 'Production', 'Esports'],
    tech: ['NextJS', 'WordPress', 'React', 'JavaScript', 'AWS'],
    images: [
      'https://images.unsplash.com/photo-1598550480917-1c485268676e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1548003693-b55d51032288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
      'https://images.unsplash.com/photo-1558008258-7ff8888b42b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
    ],
    content: '<p><b>KLiC</b> provided the House of Giants team with a unique, and massively fun challenge. The team was tasked with spinning up a custom <b>live streaming</b> solution that could be rolled into any live event venue, integrated with an existing production system, and pump live video out to the cloud.</p><p>The KLiC platform not only aims to be a plug and play live streaming solution, but also gives users the ability to switch between different viewpoints in real time. Allowing users to hop between instantaneous live feeds during the same event is a massive draw to this platform, and provides users with <b>unique control</b> over their viewing experience.</p><p>From the start, the House of Giants team worked with KLiC to build a <b>custom, mobile server rack</b> that ingests, <b>compresses</b>, and feeds <b>raw video</b> data up to <b>Amazon Web Services</b>. We then leverage several of those services to package, split, and generate live video feeds, at <b>multiple resolutions</b>, which are then consumed by the KLiC front end application. The front end application is powered by a <a href="https://wordpress.org" target="_blank" rel="noopener">Headless WordPress</a> installation for content management, paired with <a href="https://nextjs.org" target="_blank" rel="noopener">NextJS</a> in order to provide the end user with a dynamic, super fast means of interacting with these incoming live feeds.</p>',
    featured: true
  },
  {
    name: 'Air Methods',
    slug: 'air-methods',
    excerpt: 'It&rsquo;s important that we ensure the usability of a site is as enjoyable as possible, even in a moment where the user may not be particularly overjoyed.',
    categories: ['Aeromedical', 'EMS', 'Medical'],
    tech: ['WordPress', 'PHP', 'Mapbox', 'JavaScript'],
    images: [
      'https://images.unsplash.com/photo-1600533378699-e4894a55b1d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    ],
    content: '<p>House of Giants partnered with local Denver Creative Agency <a href="https://groundwrk.com" target="_blank" rel="noopener">Groundwrk</a> to bring beautiful design, usability and interaction to the Air Methods website. The team made sure that <b>interactions</b> were consise and <b>meaningful</b> to give users a sense of professionalism and care for a potentially sensitive subject. Air Methods works primarily as an aeromedical EMS provider, which means that some of its core users may have recently required their services. We wanted to ensure that these folks could get clear accurate information that they were looking for quickly, and without the hassle of a traditional marketing website.</p><p>As we collaborated with Groundwrk&rsquo;s design team, we wanted to ensure that Air Methods messaging was straght to the point, relevant patient resources were abundantly clear and available, avoiding hiding this information behind needless interactions, or delayed page animations. This lead to a solid <b>user experience</b> that keeps Air Methods patients at top of mind.</p><p>From the backend, the House of Giants team leveraged significant custom WordPress <b>Gutenberg</b> blocks to allow the Air Methods team to customize and edit page content without sacrificing clean professional style attributed by the Groundwrk design team. Additionally, House of Giants leveraged a custom <a href="https://mapbox.com" target="_blank" rel="noopener">Mapbox</a> integration to highlight Air Methods coverage areas, and base locations around the country, giving vendors an easy glimpse at Air Methods wide coverage.</p>',
    featured: true
  }
]

export default (req, res) => {
  res.statusCode = 200
  res.json(allProjects)
}
