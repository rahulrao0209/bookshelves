import styled from "styled-components/macro";
import "@fontsource/open-sans/700.css";

export const Navbar = styled.div`
  position: relative;
  margin: 60px 0 0 0;
  width: 100%;
  padding: 4px;
  background: #f9f9f9;
  z-index: 1001;
`;

export const Title = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  width: 50%;
  margin: 0 auto;
  color: #275cab;
  border-bottom: 0.1px solid #275cab;
  padding-bottom: 4px;
  margin-bottom: 4px;
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
  width: 60px;
  height: 60px;
  box-shadow: ${(props) =>
    props.isActive ? null : "8px 12px 16px rgba(0, 0, 0, 0.40)"};
  transition: box-shadow 0.2s ease-out;
  z-index: 1002;
`;

export const ButtonContainer = styled.div`
  display: flex;
  max-width: 90px;
  flex-direction: column;
`;

export const ButtonCategoryName = styled.p`
  margin: 8px 0 0 0;
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  text-align: center;
  color: ${(props) => (props.isActive ? "#02255a" : "#275cab")};

  &:hover {
    color: #002967;
  }
`;
