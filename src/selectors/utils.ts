export const IARandomChoice = (
  array: { name: string; color: string }[],
  element: string
) => {
  const newArray = array.filter(
    (item: { name: string; color: string }) => item.name !== element
  );
  const result = newArray[Math.floor(Math.random() * (newArray.length - 1))];
  return result.name;
};

export const theUserWin = (userSelection: string, iaSelection: string) => {
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
