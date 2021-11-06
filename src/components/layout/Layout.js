import React from "react";
import { AppBarContainer } from "../appbar/AppBarContainer";
import { Footer } from "../footer/Footer";

export function Layout({ children }) {
  return (
    <>
      <AppBarContainer />
      {children}
      <Footer />
    </>
  );
}
