import { graphql, useStaticQuery } from "gatsby";

export const useQueryAllBookData = () => {
  const data = useStaticQuery(graphql`
    query GetAllBooks {
      allBusinessBookRack1Json {
        nodes {
          author
          id
          rating
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      allBusinessBookRack2Json {
        nodes {
          author
          id
          rating
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      allFinanceBookRack1Json {
        nodes {
          author
          id
          rating
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      allFinanceBookRack2Json {
        nodes {
          author
          id
          rating
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return data;
};
