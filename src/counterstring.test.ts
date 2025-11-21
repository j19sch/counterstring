import { describe, expect, test } from "vitest";

import {
  counterstring,
  counterstringWrapper,
  reverseCounterstring,
} from "./counterstring";

describe("counterstring wrapper", () => {
  test("too large a number", () => {
    expect(counterstringWrapper("1000000")).toBe(
      "Better try something smaller.",
    );
  });
  test.each([
    ["abc", "*3*"],
    ["abcdefghi", "*3*5*7*9*"],
  ])("counterstring wrapper - strings: %s", (input, expected) => {
    expect(counterstringWrapper(input)).toBe(expected);
  });
  test("emoji 👨‍👩‍👦", () => {
    expect(counterstringWrapper("👨‍👩‍👦")).toBe("2*4*6*8*");
  });
  test.each([
    ["9.8", "5.800000000000001*9.8*"],
    ["5.3", "1.2999999999999998*5.3*"],
  ])("counterstring wrapper - decimals: %s", (input, expected) => {
    expect(counterstringWrapper(input)).toBe(expected);
  });
  test("normal counterstring", () => {
    expect(counterstringWrapper("7")).toBe("*3*5*7*");
  });
  test("reverse counterstring", () => {
    expect(counterstringWrapper("-7")).toBe("*7*5*3*");
  });
});

describe("counterstring", () => {
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
});

describe("reverse counterstring", () => {
  test.each([
    [0, ""],
    [1, "*"],
    [2, "*2"],
    [3, "*3*"],
    [4, "*4*2"],
    [9, "*9*7*5*3*"],
    [10, "*10*7*5*3*"],
    [
      100,
      "*100*96*93*90*87*84*81*78*75*72*69*66*63*60*57*54*51*48*45*42*39*36*33*30*27*24*21*18*15*12*9*7*5*3*",
    ],
  ])("counterstring length %i", (length, expected) => {
    expect(reverseCounterstring(length)).toBe(expected);
  });
});
