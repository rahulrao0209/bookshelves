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

export function BottomNavbar({ category, assignNewCategory }) {
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
  // const buttonInactiveStyle = {}
  console.log("category: ", category);
  const updateButtonState = (category) => {
    assignNewCategory(category);
  };

  return (
    <>
      <Navbar>
        <Title>Categories</Title>
        <NavbarButtons>
          <ButtonContainer>
            <Button
              onClick={() => updateButtonState("Innovation")}
              isActive={category === "Innovation"}
            >
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[0].fluid}
              />
            </Button>
            <ButtonCategoryName isActive={category === "Innovation"}>
              Innovation
            </ButtonCategoryName>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              onClick={() => updateButtonState("Business and Startups")}
              isActive={category === "Business and Startups"}
            >
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[1].fluid}
              />
            </Button>
            <ButtonCategoryName isActive={category === "Business and Startups"}>
              Business
            </ButtonCategoryName>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              onClick={() => updateButtonState("Psychology")}
              isActive={category === "Psychology"}
            >
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[2].fluid}
              />
            </Button>
            <ButtonCategoryName isActive={category === "Psychology"}>
              Psychology
            </ButtonCategoryName>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              onClick={() => updateButtonState("Finance")}
              isActive={category === "Finance"}
            >
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allImageSharp.nodes[3].fluid}
              />
            </Button>
            <ButtonCategoryName isActive={category === "Finance"}>
              Finance
            </ButtonCategoryName>
          </ButtonContainer>
        </NavbarButtons>
      </Navbar>
    </>
  );
}
