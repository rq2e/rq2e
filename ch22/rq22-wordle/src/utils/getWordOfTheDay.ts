import { WordInfo } from "types";
import { getToday, getTomorrow } from "./getToday";
import GOOD_WORDS from "./goodWords";

let cache: WordInfo | null = null;

function getWordOfTheDay(): WordInfo {
  const today = getToday();
  if (cache && cache.day === today) {
    return cache;
  }
  const index = today % GOOD_WORDS.length;
  const info = {
    day: today,
    nextDay: getTomorrow(),
    word: GOOD_WORDS[index],
  };
  cache = info;
  return info;
}

export default getWordOfTheDay;
