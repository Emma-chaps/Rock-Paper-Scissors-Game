export const IARandomChoice = (array: string[], element: string) => {
  const newArray = array.filter((item: string) => item !== element);
  console.log(newArray.length);

  const result = newArray[Math.floor(Math.random() * newArray.length)];
  console.log("IA result", result);
  return result;
};

export const theWinnerIs = (userSelection: string, iaSelection: string) => {
  if (userSelection === "rock") {
    if (iaSelection === "paper") {
      return false;
    }
    return true;
  }
  if (userSelection === "paper") {
    if (iaSelection === "rock") {
      return true;
    }
    return false;
  }
  if (iaSelection === "paper") {
    return true;
  }
  return false;
};

export const findSelectionData = (
  data: { name: string; color: string }[],
  option: string
) => {
  const defaultValue = {
    name: "paper",
    color: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
  };
  const found = data.find((item) => item.name === option);
  if (found && found.name && found.color) {
    return found;
  }

  return defaultValue;
};
