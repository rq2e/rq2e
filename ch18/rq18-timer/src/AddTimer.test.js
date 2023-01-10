import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AddTimer from "./AddTimer";

function setup() {
  const onAdd = jest.fn();
  render(<AddTimer onAdd={onAdd} />);
  const minutes = screen.getByRole("spinbutton", { name: "minutes" });
  const seconds = screen.getByRole("spinbutton", { name: "seconds" });
  const start = screen.getByRole("button", { name: "Start" });
  const user = userEvent.setup();
  return { onAdd, minutes, seconds, start, user };
}

test("AddTimer should invoke callback when submitted", async () => {
  // ARRANGE
  const { onAdd, user, minutes, seconds, start } = setup();
  // ASSERT
  expect(minutes).toHaveValue(0);
  expect(seconds).toHaveValue(0);
  // ACT
  await user.type(minutes, "5");
  await user.type(seconds, "30");
  // ASSERT
  expect(minutes).toHaveValue(5);
  expect(seconds).toHaveValue(30);
  // ACT
  await user.click(start);
  // ASSERT
  const expectedNumber = 5 * 60 + 30;
  expect(onAdd).toHaveBeenCalledWith(expectedNumber);
  expect(minutes).toHaveValue(0);
  expect(seconds).toHaveValue(0);
});
