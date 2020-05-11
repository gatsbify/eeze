let facebook_pixel = ""
let gtm = ""

module.exports = {
  siteMetadata: {
    title: `eezesubmit`,
    description: `Corvid 19 TERS Uif - Submissions`,
    author: `Botmaster`,
    siteUrl: `https://eezesubmit.netlify.app/`,
    phone: "hello@eezesubmit.co.za",
    fax: "Machine Decommisione!",
    address: "Bell Road, Kenmare, JHB, South Africa",
    email: "hello@eezesubmit.co.za",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtm,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/gatsby-icon.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiUrl: process.env.DEPLOY_URL ? "" : `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: ["company", "user"],
        //     // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "eezebot",
          password: "33z3123!",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/contact/*`],
      },
    },
  ],
}
