import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { RackContainer } from ".";
import { BookCard } from "../bookCard/BookCard";
import BOOKS_DATA from "../../BOOKS_DATA.json";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export function BookRack() {
  const booksData = JSON.parse(JSON.stringify(BOOKS_DATA));
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
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
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="mySwiper"
          style={{ maxWidth: "100vw" }}
        >
          {booksData.map((book) => (
            <SwiperSlide id={book.id}>
              <BookCard
                // id={book.id}
                image={data.allImageSharp.nodes[book.id - 1].fluid}
                title={book.title}
                author={book.author}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </RackContainer>
    </>
  );
}
