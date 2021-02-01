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
  const profile = data.profile.edges.map(({ node }) => {
    return node
  })

  return (
    <Layouts>
      <Head
        pageTitle="About"
        pageDescription="Cについて"
        pagePath={location.pathname}
        pageImg={profile[0].img.file.url}
        pageImgWidth={profile[0].img.file.details.image.width}
        pageImgHeight={profile[0].img.file.details.image.height}
      />
      <div className={About.about}>
        <h1 className={About.about__title}>About</h1>
        <div className="container">
          <Profile
            name={profile[0].name}
            description={profile[0].description.description}
            img={profile[0].img.fluid}
          />
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
  }
`
