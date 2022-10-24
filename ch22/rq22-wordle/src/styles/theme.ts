import { Status } from "../types";

const theme = {
  dark: {
    colors: {
      keys: {
        [Status.Unknown]: "#818384",
        [Status.Unused]: "#3a3a3c",
        [Status.Used]: "#b59f3b",
        [Status.Correct]: "#538d4e",
      },
      cells: {
        background: {
          empty: "transparent",
          [Status.Unknown]: "transparent",
          [Status.Unused]: "#3a3a3c",
          [Status.Used]: "#b59f3b",
          [Status.Correct]: "#538d4e",
        },
        border: {
          empty: "#3a3a3c",
          [Status.Unknown]: "#818384",
          [Status.Unused]: "#3a3a3c",
          [Status.Used]: "#b59f3b",
          [Status.Correct]: "#538d4e",
        },
      },
    },
  },
} as const;

export default theme;
