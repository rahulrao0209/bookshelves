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

  switch (category) {
    case "Business":
      bookDataArray1 = allBookData.allBusinessBookRack1Json.nodes;
      bookDataArray2 = allBookData.allBusinessBookRack2Json.nodes;
      return { bookDataArray1, bookDataArray2 };
    case "Finance":
      bookDataArray1 = allBookData.allFinanceBookRack1Json.nodes;
      bookDataArray2 = allBookData.allFinanceBookRack2Json.nodes;
      return { bookDataArray1, bookDataArray2 };
    default:
      return { bookDataArray1, bookDataArray2 };
  }
}

export function BookRack({ category }) {
  const allBookData = useQueryAllBookData();
  let { bookDataArray1, bookDataArray2 } = getBooksByCategory(
    category,
    allBookData
  );
  // console.log(category);
  console.log(bookDataArray1);
  console.log(bookDataArray2);
  // const bookDataArray1 = allBookData.allBusinessBookRack1Json.nodes;
  // const bookDataArray2 = allBookData.allBusinessBookRack2Json.nodes;
  // const bookDataArray3 = allBookData.allFinanceBookRack1Json.nodes;

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
