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
  ],
};
