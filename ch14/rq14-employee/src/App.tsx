import React from "react";
import EmployeeCard from "./EmployeeCard";
import "./app.css";

function App() {
  return (
    <main>
      <EmployeeCard item={{ name: "Willy Wonka", title: "Candy King" }} />
    </main>
  );
}

export default App;
