import React from "react";
import { AppBarContainer } from "../appbar/AppBarContainer";
import { BottomNavbar } from "../bottomNavbar/BottomNavbar";
import { MainContainer } from "../mainContainer/MainContainer";

export function Layout() {
  // The Layout needs to maintain the state controlled by the BottomNavbar
  // So we need to lift the state up.

  const [category, setCategory] = React.useState("Business and Startups");

  const assignNewCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <AppBarContainer />
      <MainContainer category={category} />
      <BottomNavbar category={category} assignNewCategory={assignNewCategory} />
    </>
  );
}
