import { Status, WordStatus } from "../types";

function getLetterCounts(input: string) {
  return Array.from(input).reduce(
    (sum, c) => ({ ...sum, [c]: (sum[c] || 0) + 1 }),
    {}
  );
}

function tryWord(guess: string, correct: string): WordStatus {
  const letterCounts = getLetterCounts(correct);

  // Find correctly placed letters first
  const corrects = Array.from(correct).map((c, i) => {
    if (c === guess[i]) {
      letterCounts[c]--;
      return Status.Correct;
    }
    return Status.Unknown;
  });

  // Then check remaining positions updating counts as we go
  return corrects.map((status, index) => {
    if (status === Status.Correct) {
      return status;
    }
    const char = guess[index];
    if (!(char in letterCounts) || letterCounts[char] === 0) {
      return Status.Unused;
    }
    letterCounts[char]--;
    return Status.Used;
  });
}

export default tryWord;
