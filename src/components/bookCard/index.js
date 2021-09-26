import styled from "styled-components/macro";
// import Img from "gatsby-image";
import "@fontsource/poppins";

export const Card = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-flow: column nowrap;
  align-items: center;
  margin: 16px 0;
  justify-content: center;
`;

// export const Image = styled(Img)`
//   min-width: 174px;
//   min-height: 280px;
// `;

export const Title = styled.p`
  font-weight: 1000;
  font-size: 16px;
  text-align: center;
`;

export const Author = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 8px 0 0 0;
`;
