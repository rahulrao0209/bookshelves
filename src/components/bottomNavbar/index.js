import styled from "styled-components/macro";
import "@fontsource/open-sans/700.css";

export const Navbar = styled.div`
  position: fixed;
  min-height: 170px;
  bottom: 0px;
  width: 100%;
  padding: 16px;
  z-index: 0;
  left: 0;
`;

export const Title = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  width: 50%;
  margin: 0 auto;
  color: #275cab;
  border-bottom: 0.1px solid #275cab;
  padding-bottom: 8px;
  margin-bottom: 16px;
  text-align: center;
`;

export const NavbarButtons = styled.div`
  display: flex;
  margin: 16px 0;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button``;
