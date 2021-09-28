import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import "@fontsource/kalam/700.css";
import "@fontsource/poppins";

// Animation
const slideDown = keyframes`
  from {
    transform: translate(0, -500px) rotate(-5deg) rotateY(360deg);
  }

  to {
    transform: translate(0, 4px) rotate(5deg) rotateY(0);
  }
`;

export const Title = styled.title``;

export const Tagline = styled.p`
  font-size: 18px;
  font-family: "Kalam", cursive;
  margin: 70px 16px 4px 16px;
  animation: ${slideDown} 4s cubic-bezier(0.55, 0.06, 0, 0.85);
  text-align: center;
  color: #728cb3;
`;

export const BookCategory = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 0.1px solid #275cab;
  width: 100%;
  max-width: 300px;
  color: #275cab;
`;
