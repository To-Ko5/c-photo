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
  return (
    <Layouts>
      <Head pageImg={null} pageImgHeight={null} pageImgWidth={null} />
      <div className={Top.top}>
        {data.top.edges.map(({ node }) => (
          <TopKeyvisual
            key={node.title}
            title={node.title}
            keyvisual={node.keyvisual.fluid}
          />
        ))}

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
