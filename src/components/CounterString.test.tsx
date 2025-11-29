import { describe, test, expect, vi } from "vitest";

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
    render(<CounterString />);

    const input = screen.getByRole("textbox");
    await user.type(input, "7");

    const button = screen.getByRole("button", { name: "Generate" });
    await user.click(button);

    const output = screen.getByLabelText("counterstring output");
    expect(output).toHaveTextContent(/^\*3\*5\*7\*$/);
  });

  test("should copy counterstring", async () => {
    const mock = vi.spyOn(navigator.clipboard, "writeText");
    const user = userEvent.setup();
    render(<CounterString />);

    const input = screen.getByRole("textbox");
    await user.type(input, "7");

    const button = screen.getByRole("button", { name: "Generate" });
    await user.click(button);
    const output = screen.getByLabelText("counterstring output");
    expect(output).toHaveTextContent(/^\*3\*5\*7\*$/);

    const copyButton = screen.getByRole("button", { name: "Copy" });
    await user.click(copyButton);
    expect(mock).toHaveBeenCalledWith("*3*5*7*");
  });
});
