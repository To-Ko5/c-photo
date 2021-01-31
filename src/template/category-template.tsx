import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
// components
import Layouts from '../components/layouts'
import Keyvisual from '../components/category/keyvisual'
import CategoryEyecatch from '../components/category/category-eyecatch'
import CategoryModal from '../components/category/category-modal'
// style
import Category from '../styles/category.module.scss'
// services
import { firstUpperCase } from '../services/first-uppercase'

export default ({ data, pageContext }) => {
  const [num, changeModalNumber] = useState(null)

  const toggleModal = (num: number) => {
    changeModalNumber(num)
  }
  const categoryLength = data.photo.edges.length

  return (
    <Layouts>
      <div className={Category.category}>
        {data.category.edges.map(({ node }) => (
          <Keyvisual category={node.category} img={node.img.fluid} />
        ))}
        <div className="container">
          <div className={Category.category__area}>
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
                    <CategoryModal
                      img={node.img.fluid}
                      title={node.title}
                      description={node.description.description}
                      index={index}
                      categoryLength={categoryLength}
                      toggleModal={toggleModal}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className={Category.pagination}>
              {(() => {
                if (pageContext.previous) {
                  return (
                    <div className={Category.pagination__previous}>
                      <Link
                        to={`/category/${pageContext.previous.categorySlug}/`}
                        className={Category.pagination__link}
                      >
                        {firstUpperCase(pageContext.previous.categorySlug)}
                      </Link>
                    </div>
                  )
                } else {
                  return <div></div>
                }
              })()}

              {(() => {
                if (pageContext.next) {
                  return (
                    <div className={Category.pagination__next}>
                      <Link
                        to={`/category/${pageContext.next.categorySlug}/`}
                        className={Category.pagination__link}
                      >
                        {firstUpperCase(pageContext.next.categorySlug)}
                      </Link>
                    </div>
                  )
                } else {
                  return (
                    <div className={Category.pagination__top}>
                      <Link to={'/'} className={Category.pagination__link}>
                        Top
                      </Link>
                    </div>
                  )
                }
              })()}
            </div>
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
