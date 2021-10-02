import React from "react";
import Img from "gatsby-image";
import { Card, Title, Author } from ".";

export function BookCard({ image, title, author }) {
  return (
    <>
      <Card>
        <Img
          style={{
            width: "60%",
            boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.25)",
            maxWidth: "168px",
            maxHeight: "260px",
          }}
          fluid={image}
        />
        <Author>{author}</Author>
        <Title>{title}</Title>
      </Card>
    </>
  );
}
