const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Books {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: "/details/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/book-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
