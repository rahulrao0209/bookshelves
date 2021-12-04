import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../context/modal";
import { logoutUser } from "../../services/authenticateUser";
import { Modal, Logout } from ".";

export function LogoutModal() {
  const { isOpen } = useContext(ModalContext);

  const handleModalClick = async () => {
    await logoutUser();
  };

  if (typeof document !== "undefined") {
    return ReactDOM.createPortal(
      <Modal isOpen={isOpen} onClick={handleModalClick}>
        <Logout>Logout</Logout>
      </Modal>,
      document.body
    );
  }
  return null;
}
