import * as React from "react";
import { Layout } from "../components/layout/Layout";
import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #F9F9F9;
  }`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
};

export default IndexPage;
