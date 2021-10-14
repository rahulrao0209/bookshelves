import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { RackContainer } from ".";
import { BookCard } from "../bookCard/BookCard";
import "swiper/css";
import "swiper/css/pagination";
import { useQueryAllBookData } from "../../hooks/useQueryAllBookData";
import { getBooksByCategory } from "../../../utils/getBooksByCategory";

SwiperCore.use([Pagination]);

export function BookRack({ category }) {
  const allBookData = useQueryAllBookData();
  let { bookDataArray1, bookDataArray2, bookDataArray3 } = getBooksByCategory(
    category,
    allBookData
  );
  console.log("book data: ", allBookData);
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
