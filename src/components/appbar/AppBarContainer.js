import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Link } from "gatsby";
import { AppBar, Title, Avatar } from ".";
import { LogoutModal } from "../logoutModal/LogoutModal";

export function AppBarContainer() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar>
        <Avatar
          src={user.photoURL}
          alt="Your Avatar"
          onClick={handleAvatarClick}
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>Bookshelves</Title>
        </Link>
        <LogoutModal isOpen={isOpen} />
      </AppBar>
    </>
  );
}
