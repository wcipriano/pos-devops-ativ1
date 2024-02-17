const calculator = require("../calculator");

test("7 * 8 to be 56", () => {
  expect(calculator.mult(7, 8)).toBe(56);
});

test("3 plus 9 should be 12", () => {
  expect(calculator.sum(3, 9)).toBe(12);
});

test("Sum str 1 and 2", () => {
  expect(calculator.sum("1", "2")).toBe(3);
});
