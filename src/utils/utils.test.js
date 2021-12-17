import * as utils from "./utils.js";

// ------- Tests -------------------------
test('summ', () => {
  expect(utils.summ(["4", "10"])).toBe("14");
});

test('subtract', () => {
  expect(utils.subtract(["10", "7"])).toBe("3");
});

test('multiplicate', () => {
  expect(utils.multi(["4", "3"])).toBe("12");
});

test('division', () => {
  expect(utils.div(["8", "2"])).toBe("4");
});

test('percent', () => {
  expect(utils.percent(["25", "80"])).toBe("20");
});
