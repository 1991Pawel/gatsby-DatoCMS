const path = require(`path`)

module.exports = { 
  siteMetadata: {
    title: `Michal Wrocenski`,
    description: `Fotografia Michal wrocenski`,
    author: `pawel1991@gmail.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },

    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `f2a8bb8709ee4ec85d8d489ec63210`,
        // Preview the latest version of records instead of the published one
        previewMode: false,
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
        apiUrl: 'https://site-api.datocms.com'
      },
    }
  ],
}