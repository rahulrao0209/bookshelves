import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { RackContainer } from ".";
import { BookCard } from "../bookCard/BookCard";
import "swiper/css";
import "swiper/css/pagination";
import { useQueryAllBookData } from "../../hooks/useQueryAllBookData";

SwiperCore.use([Pagination]);

function getBooksByCategory(category, allBookData) {
  let bookDataArray1 = [];
  let bookDataArray2 = [];
  let bookDataArray3 = [];

  switch (category) {
    case "Business":
      bookDataArray1 = allBookData.allBusinessBookRack1Json.nodes;
      bookDataArray2 = allBookData.allBusinessBookRack2Json.nodes;
      bookDataArray3 = allBookData.allBusinessBookRack3Json.nodes;
      return { bookDataArray1, bookDataArray2, bookDataArray3 };
    case "Finance":
      bookDataArray1 = allBookData.allFinanceBookRack1Json.nodes;
      bookDataArray2 = allBookData.allFinanceBookRack2Json.nodes;
      bookDataArray3 = allBookData.allFinanceBookRack3Json.nodes;
      return { bookDataArray1, bookDataArray2, bookDataArray3 };
    default:
      return { bookDataArray1, bookDataArray2, bookDataArray3 };
  }
}

export function BookRack({ category }) {
  const allBookData = useQueryAllBookData();
  let { bookDataArray1, bookDataArray2, bookDataArray3 } = getBooksByCategory(
    category,
    allBookData
  );

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
        <Swiper
          slidesPerView={2.5}
          spaceBetween={0}
          className="mySwiper"
          style={{ maxWidth: "100vw" }}
        >
          {bookDataArray3.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard
                image={book.image.childImageSharp.fluid}
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
