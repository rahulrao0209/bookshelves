import React from "react";
import { AppBarContainer } from "../appbar/AppBarContainer";
import { CategoryBar } from "../categoryBar/CategoryBar";
import { MainContainer } from "../mainContainer/MainContainer";

export function Layout() {
  const [category, setCategory] = React.useState("Business and Startups");

  const assignNewCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <AppBarContainer />
      <CategoryBar category={category} assignNewCategory={assignNewCategory} />
      <MainContainer category={category} />
    </>
  );
}
