import { Status } from "../types";
import tryWord from "./tryWord";

function statusToString(statuses: Status[]) {
  return statuses
    .map(
      (status) =>
        ({
          [Status.Correct]: "!",
          [Status.Unused]: "_",
          [Status.Used]: "*",
          [Status.Unknown]: " ",
        }[status])
    )
    .join("");
}

describe("tryWord", () => {
  describe("with pangrams", () => {
    test("complete miss", () => {
      const output = statusToString(tryWord("trace", "glyph"));
      expect(output).toBe("_____");
    });
    test("with overlaps", () => {
      const output = statusToString(tryWord("trace", "exact"));
      expect(output).toBe("*_!!*");
    });
    test("correct", () => {
      const output = statusToString(tryWord("trace", "trace"));
      expect(output).toBe("!!!!!");
    });
  });

  describe("with non-pangrams", () => {
    test("only one of the repeated letters should match", () => {
      const output = statusToString(tryWord("elven", "trace"));
      expect(output).toBe("*____");
    });
    test("only the correctly placed repeated letter should match", () => {
      const output = statusToString(tryWord("embed", "lover"));
      expect(output).toBe("___!_");
    });
    test("only the two letters should match and the correct one has priority", () => {
      const output = statusToString(tryWord("melee", "etude"));
      expect(output).toBe("_*__!");
    });
  });
});
