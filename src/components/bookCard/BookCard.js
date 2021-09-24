import React from "react";
import Img from "gatsby-image";
import { Card, Title, Author } from ".";

export function BookCard({ image, title, author }) {
  return (
    <>
      <Card>
        <Img style={{ width: "50%" }} fluid={image} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Card>
    </>
  );
}
