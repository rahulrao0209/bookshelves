import React from "react";
import { FooterContainer, FooterContent } from ".";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>&#169; Copyright Bookshelves 2021</FooterContent>;
      <FooterContent style={{ margin: "-12px 0 32px 0" }}>
        Built using Gatsby
      </FooterContent>
    </FooterContainer>
  );
};
