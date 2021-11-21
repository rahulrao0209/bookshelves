import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "gatsby";
import { AppBar, Title, Avatar } from ".";

export function AppBarContainer() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <AppBar>
        <Avatar src={user.photoURL} alt="Your Avatar" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>Bookshelves</Title>
        </Link>
      </AppBar>
    </>
  );
}
