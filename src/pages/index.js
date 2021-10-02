import * as React from "react";
import { Layout } from "../components/layout/Layout";
import { createGlobalStyle } from "styled-components/macro";
import { MainContainer } from "../components/mainContainer/MainContainer";
import { CategoryBar } from "../components/categoryBar/CategoryBar";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #F9F9F9;
  }`;

const IndexPage = () => {
  const [category, setCategory] = React.useState("Business and Startups");

  const assignNewCategory = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <>
      <GlobalStyle />
      <Layout>
        <CategoryBar
          category={category}
          assignNewCategory={assignNewCategory}
        />
        <MainContainer category={category} />
      </Layout>
    </>
  );
};

export default IndexPage;
