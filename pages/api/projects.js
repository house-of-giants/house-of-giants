// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const allProjects = [
  {
    name: 'Sheryl Glubok',
    slug: 'sheryl-glubok',
    excerpt: 'Montes convallis in faucibus natoque ullamcorper parturient condimentum curae venenatis, enim consectetur ante urna platea congue risus sollicitudin tempus, mollis porta volutpat non aptent eros duis ac.',
    tech: 'Gatsby / React / JavaScript / Experemental Layout',
    image: 'https://images.unsplash.com/photo-1527445741084-0d3c140baf80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1466&q=80',
    featured: true
  },
  {
    name: 'KLiC',
    slug: 'klic',
    excerpt: 'Motes convallis in faucibus natoque ullamcorper parturient condimentum curae venenatis, enim consectetur ante urna platea congue risus sollicitudin tempus, mollis porta volutpat non aptent eros duis ac.',
    tech: 'NextJS / React / JavaScript / AWS',
    image: 'https://images.unsplash.com/photo-1598550480917-1c485268676e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: true
  },
  {
    name: 'Air Methods',
    slug: 'air-methods',
    excerpt: 'Montes convallis in faucibus natoque ullamcorper parturient condimentum curae venenatis, enim consectetur ante urna platea congue risus sollicitudin tempus, mollis porta volutpat non aptent eros duis ac.',
    tech: 'WordPress / PHP / JavaScript',
    image: 'https://images.unsplash.com/photo-1600533378699-e4894a55b1d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
    featured: true
  }
]

export default (req, res) => {
  res.statusCode = 200
  res.json(allProjects)
}
