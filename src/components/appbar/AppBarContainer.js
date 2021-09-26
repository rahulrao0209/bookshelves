import React from "react";
import { AppBar, Title } from ".";

export function AppBarContainer({ children, ...restProps }) {
  return (
    <>
      <AppBar {...restProps}>
        <Title>Bookshelves</Title>
      </AppBar>
    </>
  );
}
