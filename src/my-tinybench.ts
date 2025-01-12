// run with npx tsx src/my-tinybench.ts

import { Bench } from "tinybench";

import {
  evilTester,
  fullyOptimizedConcat,
  fullyOptimizedPlus,
  fullyOptimizedTemplateString,
  makeCS,
  evilTesterCreateListAndReverse,
  // recursive,
  createListAndReverseIt,
} from "./alt-counterstrings";

const bench = new Bench({
  name: "counterstring benchmark",
  // setup: (_task, mode) => {
  //   // Run the garbage collector before warmup at each cycle
  //   if (mode === "warmup" && typeof globalThis.gc === "function") {
  //     globalThis.gc();
  //   }
  // },
  time: 100, // more time means more samples, example has 100
});

const length = 100 * 1000;

bench
  .add("reverseList", () => {
    createListAndReverseIt(length);
  })
  .add("evilTester", async () => {
    evilTester(length);
  })
  .add("reverseList", async () => {
    createListAndReverseIt(length);
  })
  .add("concatenateString", async () => {
    fullyOptimizedConcat(length);
  })
  .add("makeCS", async () => {
    makeCS(length);
  })
  .add("onlyOneReverse", async () => {
    evilTesterCreateListAndReverse(length);
  })
  .add("fullyOptimizedTemplateString", async () => {
    fullyOptimizedTemplateString(length);
  })
  .add("fullyOptimizedPlus", async () => {
    fullyOptimizedPlus(length);
  });
// .add("recursive", async () => {
//   RangeError: Maximum call stack size exceeded
//   recursive(length);
// })

await bench.run();

console.log(bench.name);
console.table(bench.table());
