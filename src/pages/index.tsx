import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layouts from '../components/layouts'
import Head from '../components/head'
import Eyecatch from '../components/top/eyecatch'

import Top from '../styles/top.module.scss'

export default ({ data }) => {
  return (
    <Layouts>
      <Head
        pageTitle={null}
        pageDescription={null}
        pagePath={null}
        pageImg={null}
        pageImgHeight={null}
        pageImgWidth={null}
      />
      <React.Fragment>
        {data.top.edges.map(({ node }) => (
          <div className={Top.top}>
            <h1 className={Top.top__title}>{node.title}</h1>
            <p className={Top.back}>
              <Img fluid={node.keyvisual.fluid} alt="" />
            </p>
          </div>
        ))}

        <div className={Top.categories}>
          {data.eyecatch.edges.map(({ node }) => (
            <Eyecatch eyecatchImg={node.img.fluid} category={node.category} />
          ))}
        </div>
      </React.Fragment>
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
      sort: { fields: category, order: DESC }
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
