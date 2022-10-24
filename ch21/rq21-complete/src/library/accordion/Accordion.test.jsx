import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import * as stories from "./Accordion.stories";

const { Default, AllCollapsed, Collapsible, MultiExpand } =
  composeStories(stories);

function setup(component) {
  render(component);
  const header = (index) => screen.getAllByRole("button")[index];
  const content = (index) => {
    const name = header(index).textContent;
    return screen.queryByRole("region", { name });
  };
  const user = userEvent.setup();
  return { header, content, user };
}

describe("Accordion", () => {
  describe("in default mode", () => {
    test("should work correctly using a pointer device", async () => {
      // ARRANGE
      const { header, content, user } = setup(<Default />);

      // ASSERT
      expect(header(0)).toHaveAttribute("aria-expanded", "true");
      expect(content(0)).toBeTruthy();
      expect(header(1)).toHaveAttribute("aria-expanded", "false");
      expect(content(1)).not.toBeTruthy();
      expect(header(2)).toHaveAttribute("aria-expanded", "false");
      expect(content(2)).not.toBeTruthy();
      expect(header(3)).toHaveAttribute("aria-expanded", "false");
      expect(content(3)).not.toBeTruthy();

      // ACT
      await user.click(header(2));

      // ASSERT
      expect(header(0)).toHaveAttribute("aria-expanded", "false");
      expect(content(0)).not.toBeTruthy();
      expect(header(2)).toHaveAttribute("aria-expanded", "true");
      expect(content(2)).toBeTruthy();

      // ACT
      await user.click(header(2));

      // ASSERT
      expect(header(2)).toHaveAttribute("aria-expanded", "true");
      expect(content(2)).toBeTruthy();
    });

    test("should work correctly using a keyboard", async () => {
      // ARRANGE
      const { header, user } = setup(<Default />);

      // ACT
      await user.keyboard("[Tab]");

      // ASSERT
      expect(header(0)).toHaveFocus();
      expect(header(0)).toHaveAttribute("aria-expanded", "true");

      // ACT
      await user.keyboard("[ArrowDown]");

      // ASSERT
      expect(header(1)).toHaveFocus();
      expect(header(1)).not.toHaveAttribute("aria-expanded", "true");

      // ACT
      await user.keyboard("[Enter]");

      // ASSERT
      expect(header(1)).toHaveFocus();
      expect(header(1)).toHaveAttribute("aria-expanded", "true");

      // ACT
      await user.keyboard("[End]");

      // ASSERT
      expect(header(3)).toHaveFocus();

      // ACT
      await user.keyboard("[Space]");

      // ASSERT
      expect(header(3)).toHaveFocus();
      expect(header(3)).toHaveAttribute("aria-expanded", "true");

      // ACT
      await user.keyboard("[ArrowUp]");

      // ASSERT
      expect(header(2)).toHaveFocus();

      // ACT
      await user.keyboard("[Home]");

      // ASSERT
      expect(header(0)).toHaveFocus();
    });
  });
  test("should render correctly when all are initially collapsed", async () => {
    // ARRANGE
    const { header, content } = setup(<AllCollapsed />);

    // ASSERT
    expect(header(0)).toHaveAttribute("aria-expanded", "false");
    expect(content(0)).not.toBeTruthy();
    expect(header(1)).toHaveAttribute("aria-expanded", "false");
    expect(content(1)).not.toBeTruthy();
    expect(header(2)).toHaveAttribute("aria-expanded", "false");
    expect(content(2)).not.toBeTruthy();
    expect(header(3)).toHaveAttribute("aria-expanded", "false");
    expect(content(3)).not.toBeTruthy();
  });
  test("should render correctly when items are collapsible", async () => {
    // ARRANGE
    const { header, content, user } = setup(<Collapsible />);

    // ASSERT
    expect(header(0)).toHaveAttribute("aria-expanded", "false");
    expect(content(0)).not.toBeTruthy();
    expect(header(1)).toHaveAttribute("aria-expanded", "false");
    expect(content(1)).not.toBeTruthy();
    expect(header(2)).toHaveAttribute("aria-expanded", "true");
    expect(content(2)).toBeTruthy();
    expect(header(3)).toHaveAttribute("aria-expanded", "false");
    expect(content(3)).not.toBeTruthy();

    // ACT
    await user.click(header(1));

    // ASSERT
    expect(header(1)).toHaveAttribute("aria-expanded", "true");
    expect(content(1)).toBeTruthy();

    // ACT
    await user.click(header(1));

    // ASSERT
    expect(header(1)).toHaveAttribute("aria-expanded", "false");
    expect(content(1)).not.toBeTruthy();
  });
  test("should render correctly when multiple items can be opened", async () => {
    // ARRANGE
    const { header, content, user } = setup(<MultiExpand />);

    // ASSERT
    expect(header(0)).toHaveAttribute("aria-expanded", "true");
    expect(content(0)).toBeTruthy();
    expect(header(1)).toHaveAttribute("aria-expanded", "false");
    expect(content(1)).not.toBeTruthy();
    expect(header(2)).toHaveAttribute("aria-expanded", "false");
    expect(content(2)).not.toBeTruthy();
    expect(header(3)).toHaveAttribute("aria-expanded", "false");
    expect(content(3)).not.toBeTruthy();

    // ACT
    await user.click(header(3));

    // ASSERT
    expect(header(0)).toHaveAttribute("aria-expanded", "true");
    expect(content(0)).toBeTruthy();
    expect(header(3)).toHaveAttribute("aria-expanded", "true");
    expect(content(3)).toBeTruthy();

    // ACT
    await user.click(header(3));

    // ASSERT
    expect(header(0)).toHaveAttribute("aria-expanded", "true");
    expect(content(0)).toBeTruthy();
    expect(header(3)).toHaveAttribute("aria-expanded", "false");
    expect(content(3)).not.toBeTruthy();
  });
});
