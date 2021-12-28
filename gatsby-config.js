/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const { lazy } = require("react")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Portfolio Site",
    author: "Manik Pokhetra",
    description: "This is a portfolio site developed with Gatsby... ",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: `transparent`,
              loading: `lazy`,
              quality: 70,
            },
          },
        ],
      },
    },
  ],
}
