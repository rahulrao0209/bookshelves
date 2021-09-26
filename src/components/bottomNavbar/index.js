import styled from "styled-components/macro";
import "@fontsource/open-sans/700.css";

export const Navbar = styled.div`
  position: fixed;
  min-height: 170px;
  bottom: 0px;
  width: 100%;
  padding: 16px;
  z-index: 1001;
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

export const Button = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.25);
`;

export const ButtonContainer = styled.div`
  display: flex;
  max-width: 90px;
  flex-direction: column;
`;

export const ButtonCategoryName = styled.p`
  margin: 12px 0 0 0;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  text-align: center;
  color: #275cab;
`;
