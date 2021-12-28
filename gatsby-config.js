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
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manik Pokhetra`,
        short_name: `ManikPokhetra`,
        start_url: `/`,
        background_color: `#1C97F1`,
        theme_color: `#F9024D`,
        display: `standalone`,
        icon: "src/assets/icons/icon.png",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
