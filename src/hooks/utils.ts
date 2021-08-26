export const IARandomChoice = (array: string[], element: string) => {
  const newArray = array.filter((item: string) => item !== element);
  console.log(newArray.length);

  const result = newArray[Math.floor(Math.random() * newArray.length)];
  console.log("IA result", result);
  return result;
};

export const theWinnerIs = (userSelection: string, iaSelection: string) => {
  console.log("user", userSelection);

  console.log("ia", iaSelection);

  if (userSelection === "rock") {
    if (iaSelection === "paper") {
      console.log("1");

      return false;
    }
    console.log("2");

    return true;
  }
  if (userSelection === "paper") {
    if (iaSelection === "rock") {
      console.log("3");

      return true;
    }
    console.log("4");

    return false;
  }
  if (iaSelection === "paper") {
    console.log("5");

    return true;
  }
  console.log("6");

  return false;
};
