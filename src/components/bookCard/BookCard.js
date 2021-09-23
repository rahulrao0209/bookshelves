import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { Card, Title, Author } from ".";
import BOOKS_DATA from "../../BOOKS_DATA.json";

export function BookCard() {
  const booksData = JSON.parse(JSON.stringify(BOOKS_DATA));
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
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
      {booksData.map((book) => {
        return (
          <Card key={book.id}>
            <Img
              style={{ width: "40%" }}
              fluid={data.allImageSharp.nodes[book.id - 1].fluid}
            />
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
          </Card>
        );
      })}
    </>
  );
}
