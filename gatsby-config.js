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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `businessRack2`,
        path: `${__dirname}/src/images/business/businessRack2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `businessRack1`,
        path: `${__dirname}/src/images/business/businessRack1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categoryBar`,
        path: `${__dirname}/src/images/categoryBar`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: "AIzaSyDsTaZhiN7O9i95YNje9EuIMR44BfpMqng",
    //       authDomain: "bookshelves-9cbe3.firebaseapp.com",
    //       projectId: "bookshelves-9cbe3",
    //       storageBucket: "bookshelves-9cbe3.appspot.com",
    //       messagingSenderId: "752841097745",
    //       appId: "1:752841097745:web:8313618cf53617456727b0",
    //       measurementId: "G-NYXP6M7MY9",
    //     },
    //   },
    // },
  ],
};
