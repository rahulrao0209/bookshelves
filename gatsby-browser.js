import React from "react";
import { AuthProvider } from "./src/context/auth";

export const wrapRootElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>;
};
