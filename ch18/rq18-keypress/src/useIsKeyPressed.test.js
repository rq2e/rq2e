import { renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useIsKeyPressed from "./useIsKeyPressed";

test("useIsKeyPressed should react to the target key and only that key", async () => {
  // ARRANGE
  const { result } = renderHook(() => useIsKeyPressed("h"));
  const user = userEvent.setup();
  // ASSERT
  expect(result.current).toBe(false);
  // ACT
  await user.keyboard("{f>}");
  // ASSERT
  expect(result.current).toBe(false);
  // ACT
  await user.keyboard("{h>}");
  // ASSERT
  expect(result.current).toBe(true);
  // ACT
  await user.keyboard("{/f}");
  // ASSERT
  expect(result.current).toBe(true);
  // ACT
  await user.keyboard("{/h}");
  // ASSERT
  expect(result.current).toBe(false);
});
