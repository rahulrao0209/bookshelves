import React from "react";
import { Navbar, Title, NavbarButtons, Button } from ".";

export function BottomNavbar() {
  return (
    <>
      <Navbar>
        <Title>Categories</Title>
        <NavbarButtons>
          <Button>
            Business
            {/* <Img
              style={{
                width: "80%",
                boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.25)",
              }}
              fluid={image}
            /> */}
          </Button>
          <Button>Psychology</Button>
          <Button>Finance</Button>
          <Button>Innovation</Button>
        </NavbarButtons>
      </Navbar>
    </>
  );
}
