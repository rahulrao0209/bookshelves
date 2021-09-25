import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Navbar, Title, NavbarButtons, Button } from ".";

export function BottomNavbar() {
  const data = useStaticQuery(graphql`
    query GetCategory {
      allImageSharp(skip: 9) {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log("data: ", data);
  return (
    <>
      <Navbar>
        <Title>Categories</Title>
        <NavbarButtons>
          <Button>
            <Img
              style={{ borderRadius: "50%" }}
              fluid={data.allImageSharp.nodes[0].fluid}
            />
          </Button>
          <Button>
            <Img
              style={{ borderRadius: "50%" }}
              fluid={data.allImageSharp.nodes[1].fluid}
            />
          </Button>
          <Button>
            <Img
              style={{ borderRadius: "50%" }}
              fluid={data.allImageSharp.nodes[2].fluid}
            />
          </Button>
          <Button>
            <Img
              style={{ borderRadius: "50%" }}
              fluid={data.allImageSharp.nodes[3].fluid}
            />
          </Button>
        </NavbarButtons>
      </Navbar>
    </>
  );
}
