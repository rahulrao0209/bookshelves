import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { BookCard } from "../bookCard/BookCard";
import { RackContainer } from ".";
// import "swiper/css";

export function BookRack() {
  return (
    <>
      <RackContainer>
        {/* <Swiper
          spaceBetween={2}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper> */}
        <BookCard />
      </RackContainer>
    </>
  );
}
