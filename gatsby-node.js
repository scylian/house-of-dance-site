const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('./src/templates/page.js')
  const res = await graphql(`
    query Pages {
      allContentfulPage {
        edges {
          node {
            id
            pageSlug
          }
        }
      }
    }
  `)

  res.data.allContentfulPage.edges.forEach((edge) => {
    createPage({
      component: pageTemplate,
      path: `/${edge.node.pageSlug}`,
      context: {
        slug: edge.node.pageSlug
      }
    })
  })
}