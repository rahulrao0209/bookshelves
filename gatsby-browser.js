import React from "react";
import { AuthProvider } from "./src/context/auth";
import { ModalProvider } from "./src/context/modal";

export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider>
      <ModalProvider>{element}</ModalProvider>
    </AuthProvider>
  );
};
