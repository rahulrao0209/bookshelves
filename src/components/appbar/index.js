import styled from "styled-components/macro";
import "@fontsource/carter-one";

export const AppBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 0;
  padding: 0;
  max-height: 60px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Title = styled.p`
  font-size: 28px;
  color: #275cab;
  font-weight: bold;
  padding: 8px 0;
  font-family: "Carter One", cursive;
  font-size: 28px;
  box-sizing: border-box;
`;
