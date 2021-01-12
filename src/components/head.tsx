import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface metaData {
  pageTitle: string | null
  pageDescription: string | null
  pagePath: string | null
}

export default (props: metaData) => {
  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        siteMetadata {
          description
          lang
          title
          siteUrl
        }
      }
    }
  `)

  const title = props.pageTitle
    ? `${props.pageTitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title
  const description =
    props.pageDescription || data.site.siteMetadata.description

  const url = props.pagePath
    ? `${data.site.siteMetadata.siteUrl}${props.pagePath}`
    : data.site.siteMetadata.siteUrl

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content=" ページの URL" />
      <meta property="og:type" content=" ページの種類" />
      <meta property="og:title" content=" ページの タイトル" />
      <meta property="og:description" content=" ページのディスクリプション" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content=" サムネイル画像の URL" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
