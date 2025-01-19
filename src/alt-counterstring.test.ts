import { describe, expect, test } from "vitest";

import {
  createListAndReverseIt,
  evilTester,
  evilTesterCreateListAndReverseIt,
  perClipInTS,
  recursiveFunction,
  whileAndIfButSeparate,
  whileAndIfWithConcat,
  whileAndIfWithPlus,
  whileAndIfWithTemplateString,
} from "./alt-counterstrings";

describe.each([
  { fn: createListAndReverseIt, fnName: createListAndReverseIt.name },
  { fn: evilTester, fnName: evilTester.name },
  {
    fn: evilTesterCreateListAndReverseIt,
    fnName: evilTesterCreateListAndReverseIt.name,
  },
  { fn: perClipInTS, fnName: perClipInTS.name },
  { fn: recursiveFunction, fnName: recursiveFunction.name },
  { fn: whileAndIfButSeparate, fnName: whileAndIfButSeparate.name },
  { fn: whileAndIfWithConcat, fnName: whileAndIfWithConcat.name },
  { fn: whileAndIfWithPlus, fnName: whileAndIfWithPlus.name },
  {
    fn: whileAndIfWithTemplateString,
    fnName: whileAndIfWithTemplateString.name,
  },
])(`function $fnName`, ({ fn }) => {
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
    expect(fn(length)).toBe(expected);
  });
});
