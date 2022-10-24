import RevealRow from "components/grid/RevealRow";
import { Status } from "types";
import { ContentWrapper, Rule, Subtitle, Title } from "./styles";

function WelcomeDialog() {
  return (
    <ContentWrapper>
      <Title>Welcome!</Title>
      <Rule />
      <Subtitle>How to guess the word of the day in 6 guesses</Subtitle>
      <ul>
        <li>Each guess must be a valid 5-letter word.</li>
        <li>
          The color of the tiles will change to show how close your guess was to
          the word.
        </li>
        <li>A green letter is correctly placed.</li>
        <li>A yellow letter is used in the word, but not in this place.</li>
        <li>A gray letter is not used in the word.</li>
      </ul>
      <Rule />
      <Subtitle>Examples</Subtitle>
      <RevealRow
        word="theme"
        statuses={[
          Status.Correct,
          Status.Unused,
          Status.Used,
          Status.Unused,
          Status.Unused,
        ]}
      />
      <ul>
        <li>
          The correct word has <em>at least</em> one <strong>T</strong> and one
          of those is in the first position.
        </li>
        <li>
          The correct word has <em>exactly</em> one <strong>E</strong> but it's
          not in the third (or fifth) position.
        </li>
        <li>
          The correct word has <em>zero</em> <strong>H</strong> and{" "}
          <strong>M</strong>.
        </li>
        <li>
          Note how the correct word can have multiple <strong>T</strong>'s but
          not multiple <strong>E</strong>'s. So <strong>TATER</strong> is a
          potential word, but <strong>TENET</strong> is not.
        </li>
      </ul>
    </ContentWrapper>
  );
}

export default WelcomeDialog;
