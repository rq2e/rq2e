import { theme } from "./styles";

export enum Status {
  Unknown = "unknown",
  Unused = "unused",
  Used = "used",
  Correct = "correct",
}

export type EmotionTheme = typeof theme;

export type KeyboardStatus = Record<string, Status>;

export type WordStatus = Status[];

export enum RowType {
  Regular,
  Revealing,
  Winning,
  Empty,
}

export type RevealingGridWord = {
  type: RowType.Revealing;
  word: string;
  statuses: WordStatus;
};

export type WinningGridWord = {
  type: RowType.Winning;
  word: string;
};

export type RegularGridWord = {
  type: RowType.Regular;
  word: string;
  isError?: boolean;
  statuses?: WordStatus;
};

export type EmptyGridRow = {
  type: RowType.Empty;
  word: "";
};

export type GridWord =
  | WinningGridWord
  | RevealingGridWord
  | RegularGridWord
  | EmptyGridRow;

export type Callback<T = never> = (arg?: T) => void;

export type UpdateCallback = (rows: string[], win?: boolean) => void;

export interface WordInfo {
  day: number;
  nextDay: number;
  word: string;
}

export type GameResult = {
  date: number;
  millis: number;
  rows: number;
  win: boolean;
};

export type TodayResult = {
  day: number;
  startTime: number;
  endTime?: number;
  rows: string[];
  win?: boolean;
};

export type Profile = {
  results: GameResult[];
  today: TodayResult;
  currentStreak: number;
  bestStreak: number;
  games: number;
  wins: number;
  winPercentage: number;
  avgGuesses: number;
  avgTime: number;
};
