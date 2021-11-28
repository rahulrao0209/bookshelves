import React, { useContext } from "react";
import { ModalContext } from "../../context/modal";
import { BookCategory } from ".";
import { BookContainer } from "../bookContainer/BookContainer";

export function MainContainer({ category }) {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div onClick={handleClick}>
        <BookCategory>{category}</BookCategory>
        <BookContainer category={category} />
      </div>
    </>
  );
}
