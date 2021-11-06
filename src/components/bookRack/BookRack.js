import React from "react";
import { RackContainer } from ".";
import { MySwiper } from "../swiper/MySwiper";
import { useQueryAllBookData } from "../../hooks/useQueryAllBookData";
import { getBooksByCategory } from "../../../utils/getBooksByCategory";

export function BookRack({ category }) {
  const allBookData = useQueryAllBookData();
  let { bookDataArray1, bookDataArray2, bookDataArray3 } = getBooksByCategory(
    category,
    allBookData
  );

  return (
    <>
      <RackContainer>
        <MySwiper bookDataArray={bookDataArray1} />
        <MySwiper bookDataArray={bookDataArray2} />
        <MySwiper bookDataArray={bookDataArray3} />
      </RackContainer>
    </>
  );
}
