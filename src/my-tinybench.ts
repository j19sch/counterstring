// run with npx tsx

import { Bench } from "tinybench";

import { counterstring } from "./counterstring";
import {
  concatenateString,
  evilTester,
  makeCS,
  onlyOneReverse,
  reverseList,
  templateString,
} from "./alt-counterstrings";

const bench = new Bench({
  name: "counterstring benchmark",
  setup: (_task, mode) => {
    // Run the garbage collector before warmup at each cycle
    if (mode === "warmup" && typeof globalThis.gc === "function") {
      globalThis.gc();
    }
  },
  time: 500, // more time means more samples, example has 100
});

const length = 1000 * 1000;

bench
  .add("prepend", () => {
    counterstring(length);
  })
  .add("evilTester", async () => {
    evilTester(length);
  })
  .add("reverseList", async () => {
    reverseList(length);
  })
  .add("concatenateString", async () => {
    concatenateString(length);
  })
  .add("makeCS", async () => {
    makeCS(length);
  })
  .add("onlyOneReverse", async () => {
    onlyOneReverse(length);
  })
  .add("templateString", async () => {
    templateString(length);
  });

await bench.run();

console.log(bench.name);
console.table(bench.table());
