import styled from "@emotion/styled";
import { Profile } from "types";
import { getTomorrow } from "utils/getToday";
import Countdown from "./Countdown";
import { ContentWrapper, Rule, Subtitle, Title } from "./styles";

const StatsList = styled.ul`
  display: flex;
  gap: 2em;
  margin: 0.5em;
  padding: 0;
`;

const StatLabel = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 60%;
  text-transform: uppercase;
`;

const Stat = styled.p`
  margin: 0;
  font-size: 350%;
  text-transform: lowercase;
`;

function formatMillis(millis: number) {
  const seconds = Math.floor(millis / 1000);
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
}

export interface ResultDialogProps {
  profile: Profile;
  word: string;
}

function ResultDialog({ profile, word }: ResultDialogProps) {
  if (!profile || !word) return null;
  const { today } = profile;
  return (
    <ContentWrapper>
      {typeof today.win === "boolean" ? (
        today.win ? (
          <>
            <Title>Congratulations!</Title>
            <Subtitle>
              You guessed "{word}" in {today.rows.length} guesses
            </Subtitle>
          </>
        ) : (
          <>
            <Title>Game over!</Title>
            <Subtitle>You did not guess "{word}"</Subtitle>
          </>
        )
      ) : (
        <Title>Keep going!</Title>
      )}
      <Rule />
      <Subtitle>Statistics</Subtitle>
      <StatsList>
        <StatLabel>
          Games<Stat>{profile.games}</Stat>
        </StatLabel>
        <StatLabel>
          Win %<Stat>{profile.winPercentage}</Stat>
        </StatLabel>
        <StatLabel>
          Streak<Stat>{profile.currentStreak}</Stat>
        </StatLabel>
        <StatLabel>
          Max Streak<Stat>{profile.bestStreak}</Stat>
        </StatLabel>
        <StatLabel>
          Avg guesses<Stat>{profile.avgGuesses.toFixed(1)}</Stat>
        </StatLabel>
        <StatLabel>
          Avg Time<Stat>{formatMillis(profile.avgTime)}</Stat>
        </StatLabel>
      </StatsList>
      <Rule />
      <Subtitle>Next game starts in</Subtitle>
      <Countdown target={getTomorrow()} />
    </ContentWrapper>
  );
}

export default ResultDialog;
