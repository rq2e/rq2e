import validWords from "./validWords";

function isValidWord(word: string) {
  return validWords.includes(word);
}

export default isValidWord;
