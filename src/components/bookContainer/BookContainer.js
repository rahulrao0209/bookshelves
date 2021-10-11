import React from "react";
import { BookRack } from "../bookRack/BookRack";

export function BookContainer({ category }) {
  return (
    <>
      <BookRack category={category} />
    </>
  );
}
