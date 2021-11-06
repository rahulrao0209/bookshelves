import * as React from "react";
import { Layout } from "../components/layout/Layout";
import { MainContainer } from "../components/mainContainer/MainContainer";
import { CategoryBar } from "../components/categoryBar/CategoryBar";
import { GlobalStyle } from "../globalStyle/globalStyle";

const IndexPage = () => {
  const [category, setCategory] = React.useState("Finance");

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
