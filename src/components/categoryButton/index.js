import styled from "styled-components/macro";
import "@fontsource/open-sans/700.css";

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
  align-items: center;
  max-width: 90px;
  flex-direction: column;
`;

export const ButtonCategoryName = styled.p`
  margin: 8px 0 0 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 13px;
  text-align: center;
  color: ${(props) => (props.isActive ? "#02255a" : "#275cab")};

  &:hover {
    color: #002967;
  }
`;
