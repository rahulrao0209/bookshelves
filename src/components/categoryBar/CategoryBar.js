import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getNameFromSrc } from "../../../utils/getNameFromSrc";
import { CategoryButton } from "../categoryButton/CategoryButton";
import { CategoryContainer, CategoryButtons } from ".";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export function CategoryBar({ category, assignNewCategory }) {
  const data = useStaticQuery(graphql`
    query GetCategoryImages {
      allFile(filter: { sourceInstanceName: { eq: "categoryBar" } }) {
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

  const buttonArray = data.allFile.nodes;

  const updateButtonState = (category) => {
    assignNewCategory(category);
  };

  return (
    <>
      <CategoryContainer>
        <CategoryButtons>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            className="mySwiper"
            style={{
              maxWidth: "100%",
              margin: "0 0 0 16px",
            }}
          >
            {buttonArray.map((button, index) => (
              <SwiperSlide key={index}>
                <CategoryButton
                  category={category}
                  categoryName={getNameFromSrc(
                    button.childrenImageSharp[0].fluid.src
                  )}
                  updateButtonState={updateButtonState}
                  imgRef={button.childrenImageSharp[0].fluid}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CategoryButtons>
      </CategoryContainer>
    </>
  );
}
