import { bench, describe } from "vitest";

import {
  createListAndReverseIt,
  evilTester,
  evilTesterCreateListAndReverseIt,
  perClipInTS,
  recursiveFunction,
  whileAndIfWithConcat,
  whileAndIfWithPlus,
  whileAndIfWithTemplateString,
} from "./alt-counterstrings";

// Vitest note: Breaking changes might not follow SemVer, please pin Vitest's version when using benchmarking.

describe("counterstring 100.000", () => {
  // not parametrizing because results in less detailed output
  const length = 100 * 1000;

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
    // is not benchmarked but does not result in error either
    // all measurements are 0, it's marked as slowest and "NaNx faster than recursiveFunction"
    recursiveFunction(length);
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
