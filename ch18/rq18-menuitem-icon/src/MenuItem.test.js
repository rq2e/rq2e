import { render, screen, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom";

import MenuItem from "./MenuItem";

test("MenuItem renders a link in a list item", () => {
  // ARRANGE
  render(<MenuItem href="/blog" label="Blog" />);

  // ASSERT
  const listItem = screen.getByRole("listitem");
  const link = getByRole(listItem, "link");
  expect(link).toHaveProperty("href", "http://localhost/blog");
  expect(link).toHaveProperty("title", "Blog");
  expect(link).toHaveTextContent("Blog");
});
