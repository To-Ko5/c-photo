import React from 'react'
import { graphql } from 'gatsby'
// components
import Layouts from '../components/layouts'
import Head from '../components/head'
import TopKeyvisual from '../components/top/top-keyvisual'
import Eyecatch from '../components/top/eyecatch'
// style
import Top from '../styles/top.module.scss'

export default ({ data }) => {
  const keyVisual = data.top.edges.map(({ node }) => {
    return node
  })
  return (
    <Layouts>
      <Head
        pageImg={keyVisual[0].keyvisual.file.url}
        pageImgHeight={keyVisual[0].keyvisual.file.details.image.height}
        pageImgWidth={keyVisual[0].keyvisual.file.details.image.width}
      />
      <div className={Top.top}>
        <TopKeyvisual
          key={keyVisual[0].title}
          title={keyVisual[0].title}
          keyvisual={keyVisual[0].keyvisual.fluid}
        />
        <div className={Top.categories}>
          {data.eyecatch.edges.map(({ node }) => (
            <Eyecatch
              key={node.category}
              eyecatchImg={node.img.fluid}
              category={node.category}
            />
          ))}
        </div>
      </div>
    </Layouts>
  )
}

export const query = graphql`
  query {
    top: allContentfulTop {
      edges {
        node {
          title
          keyvisual {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
            file {
              url
              details {
                image {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
    eyecatch: allContentfulPhotoCategory(
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          category
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
