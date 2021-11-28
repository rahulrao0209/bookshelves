import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import { navigate } from "gatsby";
import { Layout } from "../components/layout/Layout";
import { MainContainer } from "../components/mainContainer/MainContainer";
import { CategoryBar } from "../components/categoryBar/CategoryBar";
import { GlobalStyle } from "../globalStyle/globalStyle";

const IndexPage = () => {
  const [category, setCategory] = useState("Finance");

  const { user } = useContext(AuthContext);

  const assignNewCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <GlobalStyle />
      {user === null ? (
        navigate("/login")
      ) : (
        <Layout>
          <CategoryBar
            category={category}
            assignNewCategory={assignNewCategory}
          />
          <MainContainer category={category} />
        </Layout>
      )}
    </>
  );
};

export default IndexPage;
