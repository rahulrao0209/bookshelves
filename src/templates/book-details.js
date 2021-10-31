import React from "react";
// import Img from "gatsby-image";
import { Layout } from "../components/layout/Layout";
import { BookTitle, Details } from ".";

export default function BookDetails() {
  return (
    <Layout>
      <BookTitle>This is the Book Title</BookTitle>
      <Details>This is the book description</Details>
    </Layout>
  );
}
