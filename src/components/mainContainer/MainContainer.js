import React from "react";
import { BookCategory, Title } from ".";
import { BookContainer } from "../bookContainer/BookContainer";

export function MainContainer({ category }) {
  return (
    <>
      <Title>Bookshelves</Title>
      <BookCategory>{category}</BookCategory>
      <BookContainer category={category} />
    </>
  );
}
