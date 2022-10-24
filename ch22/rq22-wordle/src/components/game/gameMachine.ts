import { INITIAL_STATUS } from "utils/constants";
import { createMachine } from "xstate";
import { GridWord, KeyboardStatus, RevealingGridWord, RowType } from "types";
import { assign } from "@xstate/immer";
import isValidWord from "utils/isValidWord";
import tryWord from "utils/tryWord";
import updateKeyboard from "utils/updateKeyboard";

type GameContext = {
  word: string;
  error: string;
  grid: GridWord[];
  keyboard: KeyboardStatus;
};

type GameEvent =
  | { type: "TYPE"; char: string }
  | { type: "SUBMIT" }
  | { type: "START"; word: string; initialGrid?: string[] }
  | { type: "UNDO" }
  | { type: "EFFECT_COMPLETE" };

type GameState =
  | { value: "idle"; context: GameContext }
  | { value: "initializing"; context: GameContext }
  | { value: "guessing"; context: GameContext }
  | { value: "revealing"; context: GameContext }
  | { value: "lost"; context: GameContext }
  | { value: "winning"; context: GameContext }
  | { value: "won"; context: GameContext };

const gameMachine = createMachine<GameContext, GameEvent, GameState>(
  {
    predictableActionArguments: true,
    id: "wordle",
    initial: "idle",
    context: {
      word: "",
      error: "",
      grid: [],
      keyboard: INITIAL_STATUS,
    },
    states: {
      idle: {
        on: {
          START: [
            { target: "revealing", actions: "prefill", cond: "hasRows" },
            { target: "guessing", actions: "startFirstRound" },
          ],
        },
      },
      guessing: {
        on: {
          TYPE: { target: "guessing", actions: "addCharacter" },
          SUBMIT: [
            { target: "revealing", actions: "reveal", cond: "isValidWord" },
            { target: "guessing", actions: "error" },
          ],
          UNDO: { target: "guessing", actions: "removeCharacter" },
          EFFECT_COMPLETE: "guessing",
        },
      },
      revealing: {
        on: {
          EFFECT_COMPLETE: [
            { target: "winning", actions: "won", cond: "won" },
            { target: "lost", cond: "lost" },
            { target: "guessing", actions: "nextRound" },
          ],
        },
      },
      winning: { on: { EFFECT_COMPLETE: "won" } },
      won: { type: "final" },
      lost: { type: "final" },
    },
  },
  {
    actions: {
      addCharacter: assign((ctx, evt) => {
        const { grid } = ctx;
        ctx.error = "";
        if (evt.type !== "TYPE") return;
        if (grid[0].word.length === 5) return;
        const word = grid[0].word + evt.char;
        grid[0] = { word, type: RowType.Regular };
      }),
      removeCharacter: assign((ctx) => {
        const { grid } = ctx;
        ctx.error = "";
        if (grid[0].word.length === 0) return;
        const word = grid[0].word.slice(0, -1);
        grid[0] = { word, type: RowType.Regular };
      }),
      reveal: assign(({ grid, word }) => {
        const statuses = tryWord(grid[0].word, word);
        grid[0] = { word: grid[0].word, statuses, type: RowType.Revealing };
      }),
      error: assign((ctx) => {
        const { grid } = ctx;
        const { word } = grid[0];
        ctx.error = word.length < 5 ? "Not enough letters" : "Not in word list";
        grid[0] = { word, type: RowType.Regular, isError: true };
      }),
      won: assign(({ grid }) => {
        const { word } = grid[0] as RevealingGridWord;
        grid[0] = { word, type: RowType.Winning };
      }),
      nextRound: assign((ctx) => {
        ctx.grid = ctx.grid
          .filter((e): e is RevealingGridWord => true)
          .map(({ word, statuses }) => {
            ctx.keyboard = updateKeyboard(ctx.keyboard, word, statuses);
            return { word, type: RowType.Regular, statuses };
          });
        ctx.grid.unshift({ word: "", type: RowType.Regular });
      }),
      startFirstRound: assign((ctx, evt) => {
        ctx.grid.unshift({ word: "", type: RowType.Regular });
        if (evt.type !== "START") return;
        ctx.word = evt.word;
      }),
      prefill: assign((ctx, evt) => {
        const { grid } = ctx;
        if (evt.type !== "START") return;
        const { initialGrid = [], word } = evt;
        ctx.word = word;
        initialGrid.forEach((initialWord, i) => {
          const statuses = tryWord(initialWord, word);
          grid.push({ word: initialWord, statuses, type: RowType.Revealing });
        });
      }),
      init: assign((ctx, evt) => {
        if (evt.type !== "START") return;
        ctx.word = evt.word;
        ctx.grid.unshift({ word: "", type: RowType.Regular });
      }),
    },
    guards: {
      isValidWord: ({ grid }) => isValidWord(grid[0].word),
      won: ({ grid, word }) => grid[0].word === word,
      lost: ({ grid }) => grid.length === 6,
      alreadyWon: (ctx, evt) => {
        if (evt.type !== "START") return false;
        const { initialGrid = [], word } = evt;
        return initialGrid[0] === word;
      },
      alreadyLost: (ctx, evt) => {
        if (evt.type !== "START") return false;
        const { initialGrid = [] } = evt;
        return initialGrid.length === 6;
      },
      hasRows: (ctx, evt) => {
        if (evt.type !== "START") return false;
        const { initialGrid = [] } = evt;
        return initialGrid.length > 0;
      },
    },
  }
);

export default gameMachine;
