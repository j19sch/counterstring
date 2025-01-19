import { bench, describe } from "vitest";

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

// Vitest note: Breaking changes might not follow SemVer, please pin Vitest's version when using benchmarking.

describe("counterstring 10.000", () => {
  // not parametrizing because results in less detailed output
  const length = 10 * 1000;

  bench("createListAndReverseIt", () => {
    createListAndReverseIt(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });

  bench("evilTesterCreateListAndReverseIt", () => {
    evilTesterCreateListAndReverseIt(length);
  });

  bench("perClipInTS", () => {
    perClipInTS(length);
  });

  bench("recursiveFunction", () => {
    // if length is too high, the benchmark will not give results for this function:
    // all measurements are 0, it's marked as slowest and "NaNx faster than recursiveFunction"
    recursiveFunction(length);
  });

  bench("whileAndIfButSeparate", () => {
    whileAndIfButSeparate(length);
  });

  bench("whileAndIfWithConcat", () => {
    whileAndIfWithConcat(length);
  });

  bench("whileAndIfWithPlus", () => {
    whileAndIfWithPlus(length);
  });

  bench("whileAndIfWithTemplateString", () => {
    whileAndIfWithTemplateString(length);
  });
});
