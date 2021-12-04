import React from "react";
import { BookCategory } from ".";
import { BookContainer } from "../bookContainer/BookContainer";

export function MainContainer({ category }) {
  return (
    <>
      <BookCategory>{category}</BookCategory>
      <BookContainer category={category} />
    </>
  );
}
