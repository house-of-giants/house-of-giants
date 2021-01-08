// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
    [
      {
        name: 'Sheryl Glubok',
        excerpt: 'Montes convallis in faucibus natoque ullamcorper parturient condimentum curae venenatis, enim consectetur ante urna platea congue risus sollicitudin tempus, mollis porta volutpat non aptent eros duis ac.',
        image: 'https://images.unsplash.com/photo-1534684686641-05569203ecca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'
      },
      {
        name: 'KLiC',
        excerpt: 'Montes convallis in faucibus natoque ullamcorper parturient condimentum curae venenatis, enim consectetur ante urna platea congue risus sollicitudin tempus, mollis porta volutpat non aptent eros duis ac.',
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      },
      {
        name: 'Air Methods',
        excerpt: 'Montes convallis in faucibus natoque ullamcorper parturient condimentum curae venenatis, enim consectetur ante urna platea congue risus sollicitudin tempus, mollis porta volutpat non aptent eros duis ac.',
        image: 'https://images.unsplash.com/photo-1579833222702-ea07932d0d39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
      }
    ]
  )
}
