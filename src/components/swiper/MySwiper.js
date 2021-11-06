import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { BookCard } from "../bookCard/BookCard";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export function MySwiper({ bookDataArray }) {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={0}
      className="mySwiper"
      style={{ maxWidth: "100vw" }}
    >
      {bookDataArray.map((book) => {
        const link = `/details/${book.slug}`;
        return (
          <SwiperSlide key={book.id}>
            <Link
              style={{ textDecoration: "none", color: "#000000" }}
              to={link}
            >
              <BookCard
                image={book.image.childImageSharp.fluid}
                title={book.title}
                author={book.author}
                rating={book.rating}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
