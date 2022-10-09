import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import WhereAmI from "./WhereAmI";

function setup() {
  const mockAPI = jest.fn();
  global.navigator.geolocation = { getCurrentPosition: mockAPI };
  render(<WhereAmI />);
  const button = () => screen.getByRole("button");
  const heading = () => screen.getByRole("heading");
  const user = userEvent.setup();
  return { mockAPI, button, heading, user };
}

describe("WhereAmI component", () => {
  test("should show the coordinates if the user allows it", async () => {
    // ARRANGE
    const { mockAPI, button, heading, user } = setup();
    mockAPI.mockImplementationOnce((success, error) =>
      success({ coords: { latitude: 55, longitude: 12 } })
    );
    // ACT
    await user.click(button());
    // ASSERT
    expect(heading()).toHaveTextContent("Coordinates: 55, 12");
  });

  test("should show an error if the user does not allow access", async () => {
    // ARRANGE
    const { mockAPI, button, heading, user } = setup();
    mockAPI.mockImplementationOnce((success, error) =>
      error({ message: "User denied access" })
    );
    // ACT
    await user.click(button());
    // ASSERT
    expect(heading()).toHaveTextContent("Error: User denied access");
  });
});
