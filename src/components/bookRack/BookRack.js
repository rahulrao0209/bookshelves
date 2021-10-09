import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { RackContainer } from ".";
import { BookCard } from "../bookCard/BookCard";
import { getNameFromSrc } from "../../../utils/getNameFromSrc";
import BOOKS_DATA from "../../BOOKS_DATA.json";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export function BookRack() {
  const booksData = JSON.parse(JSON.stringify(BOOKS_DATA));
  const data = useStaticQuery(graphql`
    query GetBooksRack1 {
      rack1: allFile(filter: { sourceInstanceName: { eq: "businessRack1" } }) {
        nodes {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      rack2: allFile(filter: { sourceInstanceName: { eq: "businessRack2" } }) {
        nodes {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <RackContainer>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={0}
          className="mySwiper"
          style={{ maxWidth: "100vw" }}
        >
          {booksData.map((book, index) => {
            return (
              <SwiperSlide key={book.id}>
                <BookCard
                  image={data.rack1.nodes[index].childrenImageSharp[0].fluid}
                  title={getNameFromSrc(
                    data.rack1.nodes[index].childrenImageSharp[0].fluid.src
                  )}
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
          {booksData.map((book, index) => (
            <SwiperSlide key={book.id}>
              <BookCard
                image={data.rack1.nodes[index].childrenImageSharp[0].fluid}
                title={getNameFromSrc(
                  data.rack1.nodes[index].childrenImageSharp[0].fluid.src
                )}
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
