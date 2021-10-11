import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { RackContainer } from ".";
import { BookCard } from "../bookCard/BookCard";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export function BookRack({ category }) {
  // const queryRoot = `all${category}BookRack1Json`;

  const data = useStaticQuery(graphql`
    query GetBooks {
      allBusinessBookRack1Json {
        nodes {
          author
          id
          rating
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      allBusinessBookRack2Json {
        nodes {
          author
          id
          rating
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const bookDataArray1 = data.allBusinessBookRack1Json.nodes;
  const bookDataArray2 = data.allBusinessBookRack2Json.nodes;

  return (
    <>
      <RackContainer>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={0}
          className="mySwiper"
          style={{ maxWidth: "100vw" }}
        >
          {bookDataArray1.map((book) => {
            return (
              <SwiperSlide key={book.id}>
                <BookCard
                  image={book.image.childImageSharp.fluid}
                  title={book.title}
                  author={book.author}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={0}
          className="mySwiper"
          style={{ maxWidth: "100vw" }}
        >
          {bookDataArray2.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard
                image={book.image.childImageSharp.fluid}
                title={book.title}
                author={book.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper
          slidesPerView={2.5}
          spaceBetween={0}
          className="mySwiper"
          style={{ maxWidth: "100vw" }}
        >
          {booksData.map((book, index) => (
            <SwiperSlide key={book.id}>
              <BookCard
                image={data.allFile.nodes[index].childrenImageSharp[0].fluid}
                title={getNameFromSrc(
                  data.allFile.nodes[index].childrenImageSharp[0].fluid.src
                )}
                author={book.author}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </RackContainer>
    </>
  );
}
