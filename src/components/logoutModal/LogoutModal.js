import React from "react";
import { logoutUser } from "../../services/authenticateUser";
import ReactDOM from "react-dom";
import { Modal, Logout } from ".";

export function LogoutModal({ isOpen }) {
  const handleModalClick = async () => {
    await logoutUser();
  };
  return ReactDOM.createPortal(
    <Modal isOpen={isOpen} onClick={handleModalClick}>
      <Logout>Logout</Logout>
    </Modal>,
    document.body
  );
}
