import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// components
import Layouts from '../components/layouts'
import Head from '../components/head'
import Profile from '../components/about/profile'
// style
import About from '../styles/about.module.scss'

export default ({ data, location }) => {
  return (
    <Layouts>
      <Head
        pageTitle="About"
        pageDescription="Cについて"
        pagePath={location.pathname}
        pageImg={null}
        pageImgWidth={null}
        pageImgHeight={null}
      />
      <div className={About.about}>
        <h1 className={About.about__title}>About</h1>
        <div className="container">
          {data.profile.edges.map(({ node }) => (
            <Profile
              name={node.name}
              description={node.description.description}
              img={node.img.fluid}
            />
          ))}
        </div>
      </div>
    </Layouts>
  )
}

export const query = graphql`
  query {
    profile: allContentfulProfile {
      edges {
        node {
          name
          description {
            description
          }
          img {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
