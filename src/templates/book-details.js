import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Layout } from "../components/layout/Layout";
import {
  Title,
  Overview,
  Details,
  Description,
  Text,
  Price,
  Author,
  Rated,
  PageControls,
  BuyButton,
  DetailsPage,
} from ".";
import { FiveStars, FourAndHalfStars } from "../components/rating/Rating";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { graphql } from "gatsby";
import { GlobalStyle } from "../globalStyle/globalStyle";

export default function BookDetails({ data }) {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  const { html } = data.markdownRemark;
  const { title, price, author, rating } = data.markdownRemark.frontmatter;
  const bkImage =
    data.markdownRemark.frontmatter.bookImage.childImageSharp.fluid;

  const pageControlStyles = {
    background: "transparent",
    width: "30px",
    height: "30px",
    color: "#ACBEDA",
  };

  const likedStyle = {
    color: "red",
    background: "transparent",
    width: "30px",
    height: "30px",
  };

  return (
    <Layout>
      <GlobalStyle />
      <DetailsPage>
        <Overview>
          <PageControls>
            <Link to="/" style={pageControlStyles}>
              <HiOutlineArrowLeft style={pageControlStyles} />
            </Link>
            <div style={{ background: "transparent" }} onClick={handleClick}>
              {isLiked ? (
                <RiHeartFill style={likedStyle} />
              ) : (
                <RiHeartLine style={pageControlStyles} />
              )}
            </div>
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
          <Author>{author}</Author>
          {Number(rating) >= 4.9 ? (
            <Rated>
              {rating}
              <FiveStars />
            </Rated>
          ) : (
            <Rated>
              {rating}
              <FourAndHalfStars />
            </Rated>
          )}
        </Overview>
        <Description>
          <Text>Description</Text>
          <Price>Rs. {price}</Price>
        </Description>
        <Details dangerouslySetInnerHTML={{ __html: html }} />
        <BuyButton href="https://www.amazon.in/">Get Now</BuyButton>
      </DetailsPage>
    </Layout>
  );
}

export const query = graphql`
  query DetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        price
        rating
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
