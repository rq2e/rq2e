import React from "react";
import "./app.css";

import EmployeeCard from "./EmployeeCard";
import HighscoreEntry from "./HighscoreEntry";
import Paginable from "./Paginable";

const EMPLOYEES = [
  { name: "Harvey Specter", title: "Senior Partner" },
  { name: "Mike Ross", title: "Associate" },
  { name: "Louis Litt", title: "Partner" },
  { name: "Rachel Zane", title: "Associate" },
  { name: "Donna Paulsen", title: "Legal Secretary" },
  { name: "Jessica Pearson", title: "Managing Partner" },
  { name: "Katrina Bennett", title: "Associate" },
];

const ENTRIES = [
  { name: "Augustus Caesar", points: 2500 },
  { name: "Hammurabi", points: 2250 },
  { name: "Abraham Lincoln", points: 2000 },
  { name: "Winston Churchill", points: 1900 },
  { name: "Nelson Mandela", points: 1800 },
  { name: "Catherine the Great", points: 1700 },
  { name: "Ashoka", points: 1600 },
  { name: "Marcus Aurelius", points: 1500 },
  { name: "Lech Wałęsa", points: 1400 },
  { name: "Hatsheput", points: 1300 },
  { name: "Charles de Gaulle", points: 1200 },
  { name: "Eleanor of Aquitane", points: 1100 },
  { name: "Ivan the Terrible", points: 1000 },
];

function App() {
  return (
    <main>
      <h1>Cast of characters</h1>
      <Paginable
        className="employee-list"
        items={EMPLOYEES}
        Renderer={EmployeeCard}
      />
      <h1>Highscore</h1>
      <Paginable
        className="highscores"
        items={ENTRIES}
        Renderer={HighscoreEntry}
      />
    </main>
  );
}

export default App;
