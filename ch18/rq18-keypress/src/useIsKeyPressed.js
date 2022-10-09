import { useState, useEffect } from "react";

function useIsKeyPressed(target) {
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    const getHandler =
      (isPressed) =>
      ({ key }) =>
        key === target && setPressed(isPressed);
    const downHandler = getHandler(true);
    const upHandler = getHandler(false);
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [target]);
  return pressed;
}

export default useIsKeyPressed;
