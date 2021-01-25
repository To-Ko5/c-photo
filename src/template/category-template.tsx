import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// components
import Layouts from '../components/layouts'
import Keyvisual from '../components/category/keyvisual'
import CategoryEyecatch from '../components/category/category-eyecatch'
// style
import Category from '../styles/category.module.scss'

export default ({ data }) => {
  const [num, changeModalNumber] = useState(null)
  const toggleModal = (num: number) => {
    changeModalNumber(num)
    console.log(num)
  }

  return (
    <Layouts>
      <div className={Category.category}>
        {data.category.edges.map(({ node }) => (
          <Keyvisual category={node.category} img={node.img.fluid} />
        ))}
        <div className="container">
          <div className={Category.category__list}>
            {data.photo.edges.map(({ node }, index) => (
              <div>
                <CategoryEyecatch
                  title={node.title}
                  img={node.img.fluid}
                  index={index}
                  toggleModal={toggleModal}
                />

                {num === index && (
                  <div
                    className={Category.modal}
                    onClick={() => toggleModal(null)}
                  >
                    <div>
                      <Img fluid={node.img.fluid} />
                      <p>{node.title}</p>
                      <p>{node.description.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export const query = graphql`
  query($category: String!) {
    category: allContentfulPhotoCategory(
      filter: { categorySlug: { eq: $category } }
    ) {
      edges {
        node {
          id
          category
          img {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    photo: allContentfulPhotoPost(
      sort: { fields: contentful_id, order: DESC }
      filter: { category: { elemMatch: { categorySlug: { eq: $category } } } }
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
          category {
            category
          }
          img {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
