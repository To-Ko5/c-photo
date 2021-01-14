import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface metaData {
  pageTitle: string | null
  pageDescription: string | null
  pagePath: string | null
  pageImg: string | null
  pageImgWidth: number | null
  pageImgHeight: number | null
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
          locale
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

  const imgUrl = props.pageImg
    ? `${data.site.siteMetadata.siteUrl}${props.pageImg}`
    : `${data.site.siteMetadata.siteUrl}/default_ogp.jpg`

  const imgWidth = props.pageImgWidth || 1280

  const imgHeight = props.pageImgHeight || 640

  return (
    <Helmet>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={data.site.siteMetadata.locale} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />

      <link rel="canonical" href={url} />
    </Helmet>
  )
}
