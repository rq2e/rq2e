import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";

import * as stories from "./ButtonGroup.stories";

const { HorizontalGroup, VerticalGroup } = composeStories(stories);

describe("ButtonGroup", () => {
  test("should have 3 buttons horizontally", async () => {
    // ARRANGE
    render(<HorizontalGroup />);

    // ASSERT
    expect(screen.queryAllByRole("button")).toHaveLength(3);
  });

  test("should have 3 buttons vertically", async () => {
    // ARRANGE
    render(<VerticalGroup />);

    // ASSERT
    expect(screen.queryAllByRole("button")).toHaveLength(3);
  });
});
