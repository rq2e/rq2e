import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import * as stories from "./Button.stories";

const { Default, Outline, Ghost, WithIcon, WithStartIcon, Disabled } =
  composeStories(stories);

describe("Button", () => {
  test("should be clickable", async () => {
    // ARRANGE
    const mockOnClick = jest.fn();
    render(<Default onClick={mockOnClick} />);

    // ACT
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Regular button" }));

    // ASSERT
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("should be clickable as outline", async () => {
    // ARRANGE
    const mockOnClick = jest.fn();
    render(<Outline onClick={mockOnClick} />);

    // ACT
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Fancy outline" }));

    // ASSERT
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("should be clickable as ghost", async () => {
    // ARRANGE
    const mockOnClick = jest.fn();
    render(<Ghost onClick={mockOnClick} />);

    // ACT
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Ghost-like!" }));

    // ASSERT
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("should be clickable with end icon", async () => {
    // ARRANGE
    const mockOnClick = jest.fn();
    render(<WithIcon onClick={mockOnClick} />);

    // ACT
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Send" }));

    // ASSERT
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("should be clickable with start icon", async () => {
    // ARRANGE
    const mockOnClick = jest.fn();
    render(<WithStartIcon onClick={mockOnClick} />);

    // ACT
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: "Profile" }));

    // ASSERT
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("should not be clickable if disabled", async () => {
    // ARRANGE
    const mockOnClick = jest.fn();
    render(<Disabled onClick={mockOnClick} />);

    // ACT
    const user = userEvent.setup();
    const disabledButton = screen.getByRole("button", { name: "I'm disabled" });
    expect(() => user.click(disabledButton)).rejects.toThrow();

    // ASSERT
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
