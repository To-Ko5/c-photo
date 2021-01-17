import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layouts from '../components/layouts'
import Head from '../components/head'

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
      <div className="top">
        <h1 className="top__title">C-photo</h1>
      </div>
    </Layouts>
  )
}
