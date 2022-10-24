import { Profile } from "types";
import { getToday } from "utils/getToday";
import { getData, saveData } from "utils/localStorage";

export function getProfile(): Profile {
  const saved = getData<Profile>();
  const today = { day: getToday(), rows: [], startTime: 0 };
  if (saved) {
    return {
      ...saved,
      today: saved.today && saved.today.day === today.day ? saved.today : today,
    };
  }

  return {
    today,
    results: [],
    bestStreak: 0,
    currentStreak: 0,
    games: 0,
    wins: 0,
    winPercentage: 0,
    avgGuesses: 0,
    avgTime: 0,
  };
}

export function saveProfile(profile: Profile) {
  saveData(profile);
}
