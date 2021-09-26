import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
  Navbar,
  Title,
  NavbarButtons,
  Button,
  ButtonContainer,
  ButtonCategoryName,
} from ".";

export function BottomNavbar({ assignNewCategory }) {
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

  const updateButtonState = (category) => {
    assignNewCategory(category);
  };

  return (
    <>
      <Navbar>
        <Title>Categories</Title>
        <NavbarButtons>
          <ButtonContainer>
            <Button onClick={() => updateButtonState("Innovation")}>
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[0].fluid}
              />
            </Button>
            <ButtonCategoryName>Innovation</ButtonCategoryName>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={() => updateButtonState("Business")}>
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[1].fluid}
              />
            </Button>
            <ButtonCategoryName>Business</ButtonCategoryName>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={() => updateButtonState("Psychology")}>
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[2].fluid}
              />
            </Button>
            <ButtonCategoryName>Psychology</ButtonCategoryName>
          </ButtonContainer>
          <ButtonContainer>
            <Button onClick={() => updateButtonState("Finance")}>
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[3].fluid}
              />
            </Button>
            <ButtonCategoryName>Finance</ButtonCategoryName>
          </ButtonContainer>
        </NavbarButtons>
      </Navbar>
    </>
  );
}
