import React from "react";
import Img from "gatsby-image";
import { Card, Title, Author, Rating } from ".";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export function BookCard({ image, title, author, rating }) {
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
        {Number(rating) >= 4.9 ? (
          <Rating>
            <BsStarFill color="FFC700" /> {rating}
          </Rating>
        ) : (
          <Rating>
            <BsStarHalf color="FFC700" /> {rating}
          </Rating>
        )}
        <Author>{author}</Author>
        <Title>{title}</Title>
      </Card>
    </>
  );
}
