import "@emotion/react";
import { EmotionTheme } from "../types";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
}
