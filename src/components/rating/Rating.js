import React from "react";
import { Container } from ".";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export function FiveStars() {
  return (
    <Container>
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
    </Container>
  );
}

export function FourAndHalfStars() {
  return (
    <Container>
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarFill color="FFC700" style={{ background: "transparent" }} />
      <BsStarHalf color="FFC700" style={{ background: "transparent" }} />
    </Container>
  );
}
