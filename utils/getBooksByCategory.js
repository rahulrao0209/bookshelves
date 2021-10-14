export function getBooksByCategory(category, allBookData) {
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
    case "Psychology":
      bookDataArray1 = allBookData.allPsychologyBookRack1Json.nodes;
      bookDataArray2 = allBookData.allPsychologyBookRack2Json.nodes;
      bookDataArray3 = allBookData.allPsychologyBookRack3Json.nodes;
      return { bookDataArray1, bookDataArray2, bookDataArray3 };
    case "Innovation":
      bookDataArray1 = allBookData.allInnovationBookRack1Json.nodes;
      bookDataArray2 = allBookData.allInnovationBookRack2Json.nodes;
      bookDataArray3 = allBookData.allInnovationBookRack3Json.nodes;
      return { bookDataArray1, bookDataArray2, bookDataArray3 };
    default:
      return { bookDataArray1, bookDataArray2, bookDataArray3 };
  }
}
