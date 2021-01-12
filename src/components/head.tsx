import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface metaData {
  pageTitle: string | null
  pageDescription: string | null
}

export default (props: metaData) => {
  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        siteMetadata {
          description
          lang
          title
        }
      }
    }
  `)

  const title = props.pageTitle
    ? `${props.pageTitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const description =
    props.pageDescription || data.site.siteMetadata.description

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
