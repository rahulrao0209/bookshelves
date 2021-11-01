import styled from "styled-components/macro";
import "@fontsource/poppins";

export const DetailsPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 75px 0 0 0;
`;

export const Overview = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 400px;
  width: 90%;
  margin: 0 auto;
  background: rgba(122, 140, 166, 9%);
  border-radius: 20px;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
`;

export const PageControls = styled.div`
  display: flex;
  width: 80%;
  margin: 32px 0 0 0;
  justify-content: space-between;
  background: transparent;
`;

export const Title = styled.p`
  margin: 8px 0 16px 0;
  background: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: bolder;
`;

export const Details = styled.p`
  margin: 30px 0 0 0;
  color: black;
`;
