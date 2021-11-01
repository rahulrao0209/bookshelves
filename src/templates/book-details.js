import React from "react";
import Img from "gatsby-image";
import { Layout } from "../components/layout/Layout";
import { Title, Overview, Details, PageControls, DetailsPage } from ".";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { graphql } from "gatsby";
import { GlobalStyle } from "../globalStyle/globalStyle";

export default function BookDetails({ data }) {
  const { rawBody } = data.mdx;
  const { title } = data.mdx.frontmatter;
  const bkImage = data.mdx.frontmatter.bookImage.childImageSharp.fluid;
  const pageControlStyles = {
    background: "transparent",
    width: "30px",
    height: "30px",
    color: "#ACBEDA",
  };

  return (
    <Layout>
      <GlobalStyle />
      <DetailsPage>
        <Overview>
          <PageControls>
            <HiOutlineArrowLeft style={pageControlStyles} />
            <FiHeart style={pageControlStyles} />
          </PageControls>
          <Img
            style={{
              width: "60%",
              margin: "32px 0 0 0",
              boxShadow: "4px 8px 12px rgba(0, 0, 0, 0.25)",
              maxWidth: "168px",
              maxHeight: "260px",
            }}
            fluid={bkImage}
          />
          <Title>{title}</Title>
        </Overview>
        <Details>{rawBody}</Details>
      </DetailsPage>
    </Layout>
  );
}

export const query = graphql`
  query DetailsPage($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      rawBody
      frontmatter {
        title
        bookImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
