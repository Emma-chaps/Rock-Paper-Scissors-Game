export const IARandomChoice = (array: string[], element: string) => {
  const newArray = array.filter((item: string) => item !== element);
  const result = newArray[Math.floor(Math.random() * newArray.length)];
  console.log("IA result", result);
  return result;
};
