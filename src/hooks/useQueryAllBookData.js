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
          slug
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
          slug
        }
      }

      allBusinessBookRack3Json {
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
          slug
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
          slug
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
          slug
        }
      }

      allFinanceBookRack3Json {
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
          slug
        }
      }

      allPsychologyBookRack1Json {
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
          slug
        }
      }

      allPsychologyBookRack2Json {
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
          slug
        }
      }

      allPsychologyBookRack3Json {
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
          slug
        }
      }

      allInnovationBookRack1Json {
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
          slug
        }
      }

      allInnovationBookRack2Json {
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
          slug
        }
      }

      allInnovationBookRack3Json {
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
          slug
        }
      }

      allSpiritualityBookRack1Json {
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
          slug
        }
      }

      allSpiritualityBookRack2Json {
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
          slug
        }
      }

      allSpiritualityBookRack3Json {
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
          slug
        }
      }
    }
  `);

  return data;
};
