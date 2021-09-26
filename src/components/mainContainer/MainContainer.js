import React from "react";
import { Tagline, BookCategory, Title } from ".";
import { BookContainer } from "../bookContainer/BookContainer";

export function MainContainer({ category }) {
  return (
    <>
      <Title>Bookshelves</Title>
      <Tagline>
        Read a good book <br /> Write a great life
      </Tagline>
      <BookCategory>{category}</BookCategory>
      <BookContainer />
    </>
  );
}
