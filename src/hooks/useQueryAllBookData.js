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
        }
      }
    }
  `);

  return data;
};
