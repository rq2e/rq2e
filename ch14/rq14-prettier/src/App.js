import React from "react";

function App() {
const originalListOfCars = [
  {
    make: "Fiat",
    model: "500",
    isPickup: false,
  },
  {
    make: "BMW",
    model: "Individual M760i xDrive Model V12 Excellence THE NEXT 100 YEARS",
    isPickup: false,
  },
];
  const someCars = originalListOfCars.filter(
    (car) =>
      car.make === "Fiat" &&
      !car.isPickup &&
      !car.isHatchback &&
      car.cylinders >= 6
  );

  return (
    <div style={{ textAlign: "center" }}>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload {someCars.length}.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
