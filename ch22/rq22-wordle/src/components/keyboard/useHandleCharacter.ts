import { useCallback, useEffect } from "react";
import { Callback } from "../../types";
import { BACKSPACE, ENTER, VALID_CHARACTERS } from "../../utils/constants";

export interface KeyboardCallbacks {
  onKey: Callback<string>;
  onEnter: Callback;
  onBackspace: Callback;
}
function useHandleCharacter({
  onKey,
  onEnter,
  onBackspace,
}: KeyboardCallbacks) {
  const onClick = useCallback(
    (key: string) => {
      switch (key) {
        case ENTER:
          onEnter();
          break;
        case BACKSPACE:
          onBackspace();
          break;
        default:
          onKey(key);
          break;
      }
    },
    [onKey, onEnter, onBackspace]
  );
  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      const { key, ctrlKey, altKey, metaKey, shiftKey } = evt;
      if (ctrlKey || altKey || metaKey || shiftKey) {
        return;
      }
      switch (key) {
        case "Enter":
          onClick(ENTER);
          break;
        case "Backspace":
          onClick(BACKSPACE);
          break;
        default:
          if (VALID_CHARACTERS.includes(key.toLowerCase())) {
            onClick(key);
            evt.stopPropagation();
            evt.preventDefault();
          }
      }
    };
    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [onClick]);
  return onClick;
}

export default useHandleCharacter;
