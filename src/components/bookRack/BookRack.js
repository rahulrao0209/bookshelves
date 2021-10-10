import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { RackContainer } from ".";
import { BookCard } from "../bookCard/BookCard";
import { getNameFromSrc } from "../../../utils/getNameFromSrc";
import "swiper/css";
import "swiper/css/pagination";

// Import data
import book_rack1 from "../../data/books/business/book_rack1.json";
import book_rack2 from "../../data/books/business/book_rack2.json";

SwiperCore.use([Pagination]);

export function BookRack() {
  const booksData1 = JSON.parse(JSON.stringify(book_rack1));
  const booksData2 = JSON.parse(JSON.stringify(book_rack2));

  const data = useStaticQuery(graphql`
    query GetBooks {
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
          {booksData1.map((book, index) => {
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
          {booksData2.map((book, index) => (
            <SwiperSlide key={book.id}>
              <BookCard
                image={data.rack2.nodes[index].childrenImageSharp[0].fluid}
                title={getNameFromSrc(
                  data.rack2.nodes[index].childrenImageSharp[0].fluid.src
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
