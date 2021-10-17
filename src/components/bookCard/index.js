import styled from "styled-components/macro";
import "@fontsource/poppins";

export const Card = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-flow: column nowrap;
  align-items: center;
  margin: 16px 0;
  justify-content: center;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.p`
  font-weight: 1000;
  font-size: 14px;
  text-align: center;
`;

export const Author = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 2px 0 0 0;
`;

export const Rating = styled(Title)`
  margin: 8px 0 0 0;
`;
