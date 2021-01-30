const path = require('path')
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const photoPostResult = await graphql(`
    query {
      allContentfulPhotoCategory {
        edges {
          node {
            categorySlug
            id
          }
          previous {
            categorySlug
          }
          next {
            categorySlug
          }
        }
      }
    }
  `)

  // Handle errors
  if (photoPostResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const productTemplate = path.resolve(`src/template/category-template.tsx`)
  photoPostResult.data.allContentfulPhotoCategory.edges.forEach(
    ({ node, previous, next }) => {
      createPage({
        path: `/category/${node.categorySlug}/`,
        component: productTemplate,
        context: {
          // This time the entire product is passed down as context
          category: node.categorySlug,
          previous,
          next
        }
      })
    }
  )
}
