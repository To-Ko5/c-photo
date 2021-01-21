import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layouts from '../components/layouts'

export default ({ data }) => {
  return (
    <Layouts>
      {data.photo.edges.map(({ node }) => (
        <div>
          <p> {node.category.category}</p>
          <Img fluid={node.img.fluid} />
        </div>
      ))}
    </Layouts>
  )
}

export const query = graphql`
  query($category: String!) {
    photo: allContentfulPhotoPost(
      sort: { fields: contentful_id, order: DESC }
      filter: { category: { elemMatch: { categorySlug: { eq: $category } } } }
    ) {
      edges {
        node {
          id
          title
          category {
            category
          }
          img {
            fluid(maxWidth: 1980) {
              base64
              aspectRatio
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`
