module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "bookshelves",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `business`,
        path: `${__dirname}/src/images/business`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `finance`,
        path: `${__dirname}/src/images/finance`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `psychology`,
        path: `${__dirname}/src/images/psychology`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `spirituality`,
        path: `${__dirname}/src/images/spirituality`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `innovation`,
        path: `${__dirname}/src/images/innovation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categoryBar`,
        path: `${__dirname}/src/images/categoryBar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categoryBar`,
        path: `${__dirname}/src/images/login`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDsTaZhiN7O9i95YNje9EuIMR44BfpMqng",
          authDomain: "bookshelves-9cbe3.firebaseapp.com",
          projectId: "bookshelves-9cbe3",
          storageBucket: "bookshelves-9cbe3.appspot.com",
          messagingSenderId: "752841097745",
          appId: "1:752841097745:web:8313618cf53617456727b0",
          measurementId: "G-NYXP6M7MY9",
        },
      },
    },
  ],
};
