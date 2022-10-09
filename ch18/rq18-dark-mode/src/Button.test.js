import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";
import DarkModeContext from "./DarkModeContext";

function setup(text, isDarkMode = false) {
  const value = { isDarkMode };
  render(
    <DarkModeContext.Provider value={value}>
      <Button>{text}</Button>
    </DarkModeContext.Provider>
  );
  return screen.getByRole("button");
}

describe("Button component", () => {
  test("should render in light mode by default with the correct text", () => {
    // ARRANGE
    const button = setup("Click me");
    // ASSERT
    expect(button).toHaveTextContent("Click me");
    expect(button.style.backgroundColor).toBe("rgb(204, 204, 204)");
  });

  test("should render in dark mode if enabled", () => {
    // ARRANGE
    const button = setup("Click me", true);
    // ASSERT
    expect(button.style.backgroundColor).toBe("rgb(51, 51, 51)");
  });
});
