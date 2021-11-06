export const getNameFromSrc = (src) => {
  const lastIndexOfForwardSlash = src.lastIndexOf("/");

  // Get the kebab case name from src
  const kebabCaseName = src.slice(lastIndexOfForwardSlash + 1, src.length - 4);

  // Convert the kebab case name to Capitalized name
  return capitalizeName(kebabCaseName);
};

const capitalizeName = (kebabCaseName) => {
  const wordsInNameString = kebabCaseName.split("-");
  const capitalizedWordsInNameString = wordsInNameString.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  // Create a string name from the capitalized words
  return capitalizedWordsInNameString.join(" ");
};
