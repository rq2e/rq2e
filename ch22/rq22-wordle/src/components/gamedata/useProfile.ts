import { useCallback, useState } from "react";
import { GameResult, Profile, TodayResult, UpdateCallback } from "types";
import { getToday, getYesterday } from "utils/getToday";
import { getProfile, saveProfile } from "./persistProfile";

function getResult(today: Required<TodayResult>): GameResult {
  return {
    win: today.win,
    millis: today.endTime - today.startTime,
    date: getToday(),
    rows: today.rows.length,
  };
}

function useProfile() {
  const [profile, setProfile] = useState(getProfile);

  const updateState = useCallback<UpdateCallback>((rows, win) => {
    setProfile((oldProfile) => {
      let today = { ...oldProfile.today };
      if (today.startTime === 0) {
        today.startTime = new Date().getTime();
      }
      today.rows = rows;
      let newProfile: Profile;
      if (typeof win === "undefined") {
        newProfile = { ...oldProfile, today };
      } else {
        const endTime = new Date().getTime();
        const finalToday = { ...today, win, endTime };
        const finalResult = getResult(finalToday);
        const results = [finalResult].concat(oldProfile.results);
        const wins = oldProfile.wins + (win ? 1 : 0);
        const games = oldProfile.games + 1;
        const winPercentage =
          games === 0 ? 0 : Math.floor((1000 * wins) / games) / 10;
        const avgGuesses =
          (oldProfile.avgGuesses * oldProfile.games + rows.length) / games;
        const avgTime =
          (oldProfile.avgTime * oldProfile.games + finalResult.millis) / games;
        const streakKept =
          oldProfile.currentStreak === 0 ||
          oldProfile.results[0].date === getYesterday();
        const currentStreak = win
          ? streakKept
            ? oldProfile.currentStreak + 1
            : 1
          : 0;
        const bestStreak = Math.max(currentStreak, oldProfile.bestStreak);
        newProfile = {
          today: finalToday,
          results,
          currentStreak,
          bestStreak,
          wins,
          games,
          winPercentage,
          avgGuesses,
          avgTime,
        };
      }
      saveProfile(newProfile);
      return newProfile;
    });
  }, []);

  return {
    profile,
    updateState,
  };
}

export default useProfile;
