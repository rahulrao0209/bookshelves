import React from "react";
import { Link } from "gatsby";
import { AppBar, Title } from ".";

export function AppBarContainer({ children }) {
  return (
    <>
      <AppBar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>Bookshelves</Title>
        </Link>
      </AppBar>
    </>
  );
}
