import { bench, describe } from "vitest";

import { counterstring } from "./counterstring";
import {
  concatenateString,
  evilTester,
  makeCS,
  reverseList,
  templateString,
} from "./alt-counterstrings";

// TODO: change to bench.each after figuring out function name in test name

// TODO: does not parametrizing show better benchmark results? YES!

// TODO: Breaking changes might not follow SemVer, please pin Vitest's version when using it.

// describe.skip('counterstring parametrized', () => {
//   describe.each([
//     [10],
//     [100],
//     [1000],
//     [10000],
//     [100000],
//   ])('length %i', (length) => {
//     bench('prepend', () => {
//       counterstring(length)
//     })

//     bench('reverse list', () => {
//       reverseList(length)
//     })

//     bench('template string', () => {
//       templateString(length)
//     })

//     bench('concatenate string', () => {
//       concatenateString(length)
//     })

//     bench('perl as TS', () => {
//       makeCS(length)
//     })
//   })
// })

describe("counterstring 5", () => {
  const length = 5;
  bench("prepend", () => {
    counterstring(length);
  });

  bench("reverse list", () => {
    reverseList(length);
  });

  bench("template string", () => {
    templateString(length);
  });

  bench("concatenate string", () => {
    concatenateString(length);
  });

  bench("perl as TS", () => {
    makeCS(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });
});

describe("counterstring 100", () => {
  const length = 100;
  bench("prepend", () => {
    counterstring(length);
  });

  bench("reverse list", () => {
    reverseList(length);
  });

  bench("template string", () => {
    templateString(length);
  });

  bench("concatenate string", () => {
    concatenateString(length);
  });

  bench("perl as TS", () => {
    makeCS(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });
});

describe("counterstring 1000", () => {
  const length = 1000;
  bench("prepend", () => {
    counterstring(length);
  });

  bench("reverse list", () => {
    reverseList(length);
  });

  bench("template string", () => {
    templateString(length);
  });

  bench("concatenate string", () => {
    concatenateString(length);
  });

  bench("perl as TS", () => {
    makeCS(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });
});

describe("counterstring 5000", () => {
  const length = 5000;
  bench("prepend", () => {
    counterstring(length);
  });

  bench("reverse list", () => {
    reverseList(length);
  });

  bench("template string", () => {
    templateString(length);
  });

  bench("concatenate string", () => {
    concatenateString(length);
  });

  bench("perl as TS", () => {
    makeCS(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });
});

describe("counterstring 100000", () => {
  const length = 100 * 1000;
  bench("prepend", () => {
    counterstring(length);
  });

  bench("reverse list", () => {
    reverseList(length);
  });

  bench("template string", () => {
    templateString(length);
  });

  bench("concatenate string", () => {
    concatenateString(length);
  });

  bench("perl as TS", () => {
    makeCS(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });
});

describe("counterstring 1000000", () => {
  const length = 1000 * 1000;
  bench("prepend", () => {
    counterstring(length);
  });

  bench("reverse list", () => {
    reverseList(length);
  });

  bench("template string", () => {
    templateString(length);
  });

  bench("concatenate string", () => {
    concatenateString(length);
  });

  bench("perl as TS", () => {
    makeCS(length);
  });

  bench("evilTester", () => {
    evilTester(length);
  });
});
