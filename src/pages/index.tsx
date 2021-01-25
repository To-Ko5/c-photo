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
      <div className={Top.top}>
        <h1 className={Top.top__title}>C-photo</h1>
        <p className={Top.back}>
          <Img
            fluid={data.flowers.childImageSharp.fluid}
            alt=""
            style={{ height: '100%' }}
          />
        </p>
      </div>

      <div className={Top.categories}>
        {data.eyecatch.edges.map(({ node }) => (
          <Eyecatch eyecatchImg={node.img.fluid} category={node.category} />
        ))}
      </div>
    </Layouts>
  )
}

export const query = graphql`
  query {
    flowers: file(relativePath: { eq: "flowers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid_withWebp
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
