import styled from "styled-components/macro";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";

export const DetailsPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 75px 0 0 0;
`;

export const Overview = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
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
  margin: 8px 0 0 0;
  background: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

export const Details = styled.p`
  margin: 0 auto;
  padding: 8px;
  width: 90%;
  color: black;
  opacity: 0.68;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 32px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 32px auto 8px auto;
  padding: 0 8px;
  width: 90%;
`;

export const Text = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
`;

export const Price = styled.p`
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  color: #000000;
  opacity: 0.5;
`;

export const Author = styled.p`
  margin: 2px 0 8px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  color: #000000;
  opacity: 0.8;
  background: transparent;
`;

export const Rated = styled.div`
  margin: 16px 0;
  text-align: center;
  background: transparent;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;
