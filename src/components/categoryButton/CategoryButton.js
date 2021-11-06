import React from "react";
import { Button, ButtonCategoryName, ButtonContainer } from "./index.js";
import Img from "gatsby-image";

export function CategoryButton({
  category,
  categoryName,
  updateButtonState,
  imgRef,
}) {
  return (
    <ButtonContainer>
      <Button
        onClick={() => updateButtonState(categoryName)}
        isActive={category === categoryName}
      >
        <Img style={{ borderRadius: "50%" }} fluid={imgRef} />
      </Button>
      <ButtonCategoryName isActive={category === categoryName}>
        {categoryName}
      </ButtonCategoryName>
    </ButtonContainer>
  );
}
