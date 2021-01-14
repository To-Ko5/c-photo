/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `C-photo`,
    description: `C’s photos`,
    lang: `ja`,
    siteUrl: `localhost:8000`,
    locale: `ja_JP`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-typescript-css-modules`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `C-photo`,
        short_name: `C-photo`,
        start_url: `/`,
        lang: `ja`,
        icon: `static/icon.png`,
        background_color: `#212121`,
        theme_color: `#fafafa`,
        display: `standalone`
      }
    },
    `gatsby-plugin-offline`
  ]
}
