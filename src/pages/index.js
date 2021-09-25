import * as React from "react";
import AppBarContainer from "../components/appbar/AppBarContainer";
import { MainContainer } from "../components/mainContainer/MainContainer";
import { BottomNavbar } from "../components/bottomNavbar/BottomNavbar";
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
      <AppBarContainer />
      <MainContainer />
      <BottomNavbar />
    </>
  );
};

export default IndexPage;
