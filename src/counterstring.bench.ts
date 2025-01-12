import { bench, describe } from "vitest";

import {
  evilTester,
  fullyOptimizedConcat,
  fullyOptimizedPlus,
  fullyOptimizedTemplateString,
  makeCS,
  onlyOneReverse,
  recursive,
  createListAndReverseIt,
} from "./alt-counterstrings";

// Note: Breaking changes might not follow SemVer, please pin Vitest's version when using benchmarking.

describe("counterstring 100.000", () => {
  // not parametrizing because results in less detailed output
  const length = 100 * 1000;

  bench("reverse list", () => {
    createListAndReverseIt(length);
  });

  bench("template string", () => {
    fullyOptimizedTemplateString(length);
  });

  bench("concatenate string", () => {
    fullyOptimizedConcat(length);
  });

  bench("perl as TS", () => {
    makeCS(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });

  bench("onlyOneReverse", () => {
    onlyOneReverse(length);
  });

  bench("fullyOptimized", () => {
    fullyOptimizedPlus(length);
  });

  bench("recursive", () => {
    recursive(length);
  });
});
