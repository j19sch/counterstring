import { describe, test, expect } from "vitest";

import { render, screen } from "@testing-library/preact";
import { CounterString } from "./CounterString";
import { userEvent } from "@testing-library/user-event";

describe("CounterString", () => {
  test("should render", () => {
    const { container } = render(<CounterString />);
    expect(container).toHaveTextContent("length");
  });

  test("should produce counterstring", async () => {
    const user = userEvent.setup();
    const { container } = render(<CounterString />);

    const input = screen.getByRole("textbox");
    await user.type(input, "7");

    const button = screen.getByRole("button", { name: "Generate" });
    await user.click(button);

    expect(container).toHaveTextContent("*3*5*7*");
  });
});
