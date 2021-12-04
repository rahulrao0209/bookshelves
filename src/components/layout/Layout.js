import React, { useContext } from "react";
import { ModalContext } from "../../context/modal";
import { AppBarContainer } from "../appbar/AppBarContainer";
import { Footer } from "../footer/Footer";

export function Layout({ children }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div onClick={handleClick}>
        <AppBarContainer />
        {children}
        <Footer />
      </div>
    </>
  );
}
