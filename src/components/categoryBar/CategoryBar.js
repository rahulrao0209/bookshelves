import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
  CategoryContainer,
  CategoryButtons,
  Button,
  ButtonContainer,
  ButtonCategoryName,
} from ".";

export function CategoryBar({ category, assignNewCategory }) {
  const data = useStaticQuery(graphql`
    query GetCategoryImages {
      allFile(filter: { sourceInstanceName: { eq: "bottomNavbar" } }) {
        nodes {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  // console.log("data", data);
  // console.log("image", data.allFile.nodes[0].childrenImageSharp[0].fluid);
  const updateButtonState = (category) => {
    assignNewCategory(category);
  };

  return (
    <>
      <CategoryContainer>
        <CategoryButtons>
          <ButtonContainer>
            <Button
              onClick={() => updateButtonState("Innovation")}
              isActive={category === "Innovation"}
            >
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid}
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
                fluid={data.allFile.nodes[1].childrenImageSharp[0].fluid}
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
                fluid={data.allFile.nodes[2].childrenImageSharp[0].fluid}
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
                fluid={data.allFile.nodes[3].childrenImageSharp[0].fluid}
              />
            </Button>
            <ButtonCategoryName isActive={category === "Finance"}>
              Finance
            </ButtonCategoryName>
          </ButtonContainer>
          <ButtonContainer>
            <Button
              onClick={() => updateButtonState("Spirituality")}
              isActive={category === "Spirituality"}
            >
              <Img
                style={{ borderRadius: "50%" }}
                fluid={data.allFile.nodes[4].childrenImageSharp[0].fluid}
              />
            </Button>
            <ButtonCategoryName isActive={category === "Spirituality"}>
              Spirituality
            </ButtonCategoryName>
          </ButtonContainer>
        </CategoryButtons>
      </CategoryContainer>
    </>
  );
}
