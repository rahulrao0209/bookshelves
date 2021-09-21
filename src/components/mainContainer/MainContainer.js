import React from "react";
import { Tagline, BookCategory } from ".";
import { BookContainer } from "../bookContainer/BookContainer";

export function MainContainer() {
  return (
    <>
      <Tagline>
        Read a good book <br /> Write a great life
      </Tagline>
      <BookCategory>Business and Startups</BookCategory>
      <BookContainer />
    </>
  );
}
