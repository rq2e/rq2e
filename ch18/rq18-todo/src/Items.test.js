import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Items from "./Items";

test("Items should call onDelete callback when item is deleted", async () => {
  // ARRANGE
  const items = ["Item A", "Item B"];
  const mockDelete = jest.fn();
  render(<Items items={items} onDelete={mockDelete} />);

  // ACT
  const user = userEvent.setup();
  const secondItemDelete = screen.getByRole("button", {
    name: "Delete 'Item B'",
  });
  await user.click(secondItemDelete);

  // ASSERT
  expect(mockDelete).toHaveBeenCalledWith("Item B");
});
