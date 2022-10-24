import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import * as stories from "./Switch.stories";

const { Default, Prechecked } = composeStories(stories);

describe("Switch", () => {
  test("should be clickable", async () => {
    // ARRANGE
    const mockOnChange = jest.fn();
    render(<Default onChange={mockOnChange} />);
    const checkbox = screen.getByRole("checkbox", { name: "Enable Wifi" });

    // ASSERT
    expect(checkbox).not.toBeChecked();

    // ACT
    const user = userEvent.setup();
    await user.click(checkbox);

    // ASSERT
    expect(checkbox).toBeChecked();
    expect(mockOnChange).toHaveBeenCalledTimes(1);

    // ACT
    await user.click(checkbox);

    // ASSERT
    expect(checkbox).not.toBeChecked();
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  test("should render correctly if pre-checked and be toggleable via keyboard", async () => {
    // ARRANGE
    render(<Prechecked />);
    const checkbox = screen.getByRole("checkbox", { name: "Pets allowed?" });

    // ASSERT
    expect(checkbox).toBeChecked();

    // ACT
    const user = userEvent.setup();
    await user.keyboard("{Tab}");
    await user.keyboard("{Enter}");

    // ASSERT
    expect(checkbox).not.toBeChecked();

    // ACT
    await user.keyboard("E");

    // ASSERT
    expect(checkbox).not.toBeChecked();
  });
});
