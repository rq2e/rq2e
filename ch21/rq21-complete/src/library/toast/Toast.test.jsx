import { getByRole, render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Various } from "./Toast.stories";
import { act } from "react-dom/test-utils";

const ToastLauncher = composeStory(Various);
jest.useFakeTimers();

function setup() {
  render(<ToastLauncher />);
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  const getToasts = () => screen.queryAllByRole("article");
  return {
    user,
    getToasts,
  };
}

describe("Toast", () => {
  test("should render a normal toast and close it after 3 seconds", async () => {
    // ARRANGE
    const { user, getToasts } = setup();

    // ACT
    await user.click(screen.getByRole("button", { name: "Normal toast" }));

    // ASSERT
    expect(getToasts()).toHaveLength(1);

    // ACT
    act(() => jest.advanceTimersByTime(3000));

    // ASSERT
    expect(getToasts()).toHaveLength(0);
  });

  test("should render an outline toast and close it after 3 seconds", async () => {
    // ARRANGE
    const { user, getToasts } = setup();

    // ACT
    await user.click(screen.getByRole("button", { name: "Outline toast" }));

    // ASSERT
    expect(getToasts()).toHaveLength(1);

    // ACT
    act(() => jest.advanceTimersByTime(3000));

    // ASSERT
    expect(getToasts()).toHaveLength(0);
  });

  test("should render a dismissable toast that can be dismissed", async () => {
    // ARRANGE
    const { user, getToasts } = setup();

    // ACT
    await user.click(screen.getByRole("button", { name: "Dismissable toast" }));

    // ASSERT
    expect(getToasts()).toHaveLength(1);

    // ACT
    const dismiss = getByRole(getToasts()[0], "button", { name: "Dismiss" });
    await user.click(dismiss);

    // ASSERT
    expect(getToasts()).toHaveLength(0);
  });

  test("should render a persistent toast that can only be dismissed", async () => {
    // ARRANGE
    const { user, getToasts } = setup();

    // ACT
    await user.click(screen.getByRole("button", { name: "Persistent toast" }));

    // ASSERT
    expect(getToasts()).toHaveLength(1);

    // ACT
    act(() => jest.advanceTimersByTime(4000));

    // ASSERT
    expect(getToasts()).toHaveLength(1);

    // ACT
    const dismiss = getByRole(getToasts()[0], "button", { name: "Dismiss" });
    await user.click(dismiss);

    // ASSERT
    expect(getToasts()).toHaveLength(0);
  });
});
