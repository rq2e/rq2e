import { KeyboardStatus, Status, WordStatus } from "../types";

function mergeStatuses(a: Status, b: Status): Status {
  if ([a, b].includes(Status.Correct)) return Status.Correct;
  if ([a, b].includes(Status.Used)) return Status.Used;
  return Status.Unused;
}

function updateKeyboard(
  keyboard: KeyboardStatus,
  word: string,
  wordStatus: WordStatus
): KeyboardStatus {
  const newKeyboard = { ...keyboard };
  wordStatus.forEach((status, index) => {
    const key = word[index];
    newKeyboard[key] = mergeStatuses(newKeyboard[key], status);
  });
  return newKeyboard;
}

export default updateKeyboard;
