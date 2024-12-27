import "@testing-library/jest-dom/vitest";
// https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/

import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/preact";

import { CounterString } from "./counterstring";

describe("test it", () => {
  test("more test it", async () => {
    // const { container } = render(<CounterString />);
    // render(<CounterString />);
    // expect(screen.queryByRole("button", {"name": "Generate"})).toBeInTheDocument();
  });
});
