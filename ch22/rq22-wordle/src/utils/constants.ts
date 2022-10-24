import { Status, KeyboardStatus } from "../types";

export const KEYBOARD_LAYOUT = `
q w e r t y u i o p
a s d f g h j k l
⏎ z x c v b n m ⌫
`
  .trim()
  .split("\n")
  .map((row) => row.split(" "));
export const BACKSPACE = "⌫";
export const ENTER = "⏎";
export const LARGE_KEYS = [ENTER, BACKSPACE];
export const VALID_CHARACTERS = KEYBOARD_LAYOUT.flat().filter(
  (k) => !LARGE_KEYS.includes(k)
);
export const INITIAL_STATUS: KeyboardStatus = Object.fromEntries(
  VALID_CHARACTERS.map((char) => [char, Status.Unknown])
);
