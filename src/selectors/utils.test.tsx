import { IARandomChoice, theUserWin, findSelectionData } from "./utils";

describe("utils selectors", () => {
  const gameOptions = [
    { name: "test", color: "green" },
    { name: "test2", color: "yellow" },
  ];
  describe("IARandomChoice function", () => {
    test("should be a function", () => {
      expect(typeof IARandomChoice).toBe("function");
    });
    test("should return a string", () => {
      expect(typeof IARandomChoice(gameOptions, "paper")).toBe("string");
    });
    test("should not be the same option name", () => {
      expect(IARandomChoice(gameOptions, "test")).not.toBe("test");
    });
  });
  describe("theUserWin", () => {
    test("should be a function", () => {
      expect(typeof theUserWin).toBe("function");
    });
    const userSelection = "rock";
    const iaSelection = "paper";
    test("should return a boolean", () => {
      expect(typeof theUserWin(userSelection, iaSelection)).toBe("boolean");
    });
    test("should return false", () => {
      expect(theUserWin(userSelection, iaSelection)).toBeFalsy();
    });
  });
  describe("findSelectionData", () => {
    test("should be a function", () => {
      expect(typeof findSelectionData).toBe("function");
    });
    test("should return an object", () => {
      expect(typeof findSelectionData(gameOptions, "test")).toBe("object");
    });
    const defaultValue = {
      name: "paper",
      color: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    };
    test("should return default value if no selectionData found", () => {
      expect(findSelectionData(gameOptions, "option-qui-n-existe-pas")).toEqual(
        defaultValue
      );
    });
  });
});
