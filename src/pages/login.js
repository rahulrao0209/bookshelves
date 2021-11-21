import React, { useContext } from "react";
import { graphql, navigate } from "gatsby";
import { authenticateUser } from "../services/authenticateUser";
import Img from "gatsby-image";
import styled from "styled-components/macro";
import { AuthContext } from "../context/auth";
import "@fontsource/carter-one";
import "@fontsource/poppins";

export default function LoginPage({ data }) {
  const loginImage = data.allImageSharp.edges[0].node.fluid;
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    const user = await authenticateUser();
    if (user) {
      setUser(user.displayName);
      navigate("/");
    }
  };

  return (
    <div>
      <Title>Bookshelves</Title>
      <Img
        style={{
          width: "80%",
          margin: "12px auto 0 auto",
        }}
        fluid={loginImage}
      />
      <Intro>Find curated list of best selling books accross generes</Intro>
      <LoginButton onClick={handleLogin}>Continue with Google</LoginButton>
      {/* <SignupButton>Maybe Later</SignupButton> */}
    </div>
  );
}

const Title = styled.p`
  margin: 60px 0 0 0;
  text-align: center;
  font-family: "Carter One", cursive;
  font-size: 36px;
  color: #275cab;
`;

const Intro = styled.p`
  font-family: "Carter One", cursive;
  font-size: 18px;
  padding: 8px 12px;
  text-align: center;
  color: #000000;
`;

const LoginButton = styled.button`
  margin: 8px auto;
  display: block;
  width: 240px;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  text-align: center;
  background: #275cab;
  color: #fff;
  box-shadow: 2px 6px 6px rgba(0, 0, 0, 0.25);
`;

// const SignupButton = styled(LoginButton)`
//   background: #a21a07;
// `;

export const query = graphql`
  query GetLoginImage {
    allImageSharp(filter: { fluid: { originalName: { eq: "login.png" } } }) {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
