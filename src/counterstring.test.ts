import { describe, expect, test } from "vitest";

import { counterstring } from "./counterstring";

test.each([
  [0, ""],
  [1, "*"],
  [2, "2*"],
  [3, "*3*"],
  [4, "2*4*"],
  [9, "*3*5*7*9*"],
  [10, "*3*5*7*10*"],
  [
    100,
    "*3*5*7*9*12*15*18*21*24*27*30*33*36*39*42*45*48*51*54*57*60*63*66*69*72*75*78*81*84*87*90*93*96*100*",
  ],
])("counterstring length %i", (length, expected) => {
  expect(counterstring(length)).toBe(expected);
});

describe("invalid inputs", () => {
  test("string", () => {
    expect(() => counterstring("asd")).toThrowError(
      "Length should be a number",
    );
  });
  test("negative number", () => {
    expect(() => counterstring(-1)).toThrowError("No negative length");
  });
});
