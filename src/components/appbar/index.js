import styled from "styled-components/macro";
import "@fontsource/carter-one";

export const AppBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 2000;
  top: 0;
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
  box-sizing: border-box;
`;

export const Avatar = styled.img`
  position: absolute;
  left: 25px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: blue;
  z-index: 3000;
`;
