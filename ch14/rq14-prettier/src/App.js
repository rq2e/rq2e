import React from "react";

function App() {
  const originalListOfCars = [
    {
      make: "Fiat",
      model: "500",
      isPickup: false,
      cylinders: 4,
    },
    {
      make: "BMW",
      model: "Individual M760i xDrive Model V12 Excellence THE NEXT 100 YEARS",
      isPickup: false,
      cylinders: 6,
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
    <header>
      <p>Matching {someCars.length} cars.</p>
    </header>
  );
}

export default App;
