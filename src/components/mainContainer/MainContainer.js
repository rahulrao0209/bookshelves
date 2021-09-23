import React from "react";
import { Tagline, BookCategory, Title } from ".";
import { BookContainer } from "../bookContainer/BookContainer";

export function MainContainer() {
  return (
    <>
      <Title>Bookshelves</Title>
      <Tagline>
        Read a good book <br /> Write a great life
      </Tagline>
      <BookCategory>Business and Startups</BookCategory>
      <BookContainer />
    </>
  );
}
