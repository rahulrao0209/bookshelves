import styled from "styled-components/macro";
import "@fontsource/open-sans/700.css";

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 200px;
  height: 60px;
  z-index: 4000;
  // background: #efececf2;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 4px 8px 16px 4px rgba(163, 152, 152, 0.5);
  position: absolute;
  top: 50px;
  left: 30px;
`;

export const Logout = styled.p`
  margin: 8px auto 8px auto;
  background: transparent;
  font-family: "Open Sans", sans-serif;
  color: #275cab;
  font-size: 28px;
  text-align: center;
`;
