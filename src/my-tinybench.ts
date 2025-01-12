// run with: npx tsx src/my-tinybench.ts

import { Bench } from "tinybench";

import {
  createListAndReverseIt,
  evilTester,
  evilTesterCreateListAndReverseIt,
  perClipInTS,
  // recursiveFunction,
  whileAndIfWithConcat,
  whileAndIfWithPlus,
  whileAndIfWithTemplateString,
} from "./alt-counterstrings";

const bench = new Bench({
  name: "counterstring benchmark",
  setup: (_task, mode) => {
    // Run the garbage collector before warmup at each cycle
    if (mode === "warmup" && typeof globalThis.gc === "function") {
      globalThis.gc();
    }
  },
  time: 100,
});

const length = 100 * 1000;

bench
  .add("createListAndReverseIt", () => {
    createListAndReverseIt(length);
  })
  .add("evilTester", async () => {
    evilTester(length);
  })
  .add("evilTesterCreateListAndReverseIt", async () => {
    evilTesterCreateListAndReverseIt(length);
  })
  .add("perClipInTS", async () => {
    perClipInTS(length);
  })
  // .add("recursive", async () => {
  //   // RangeError: Maximum call stack size exceeded
  //   recursive(length);
  // })
  .add("whileAndIfWithConcat", async () => {
    whileAndIfWithConcat(length);
  })
  .add("whileAndIfWithTemplateString", async () => {
    whileAndIfWithTemplateString(length);
  })
  .add("whileAndIfWithPlus", async () => {
    whileAndIfWithPlus(length);
  });

await bench.run();

console.log(bench.name);
console.table(bench.table());
