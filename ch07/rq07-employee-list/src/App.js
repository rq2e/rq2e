import { useMemo, useState } from "react";
function Employees({ employeeList }) {
  const [showTempOnly, setShowTempOnly] = useState(false);
  const filteredList = useMemo(
    () =>
      employeeList.filter(({ isTemporary }) =>
        showTempOnly ? isTemporary : true
      ),
    [employeeList, showTempOnly]
  );
  return (
    <section>
      <h1>Employees</h1>
      <label>
        <input type="checkbox" onChange={() => setShowTempOnly((f) => !f)} />
        Show temp only?
      </label>
      <ul>
        {filteredList.map(({ id, name, salary, isTemporary }) => (
          <li key={id}>
            {name}: {salary} {isTemporary && "(temp)"}
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  const employeeList = [
    { name: "Bugs Bunny", salary: "$20,000", isTemporary: false },
    { name: "Daffy Duck", salary: "$15,000", isTemporary: false },
    { name: "Porky Pig", salary: "$17,000", isTemporary: true },
    { name: "Elmer Fudd", salary: "$18,500", isTemporary: false },
    { name: "Wile E. Coyote", salary: "$21,000", isTemporary: false },
    { name: "Road Runner", salary: "$22,000", isTemporary: false },
    { name: "Tweety", salary: "$7,000", isTemporary: false },
    { name: "Sylvester", salary: "$59,000", isTemporary: false },
    { name: "Granny", salary: "$6,900", isTemporary: true },
    { name: "Yosemite Sam", salary: "$11,000", isTemporary: true },
    { name: "Tasmanian Devil", salary: "$12,000", isTemporary: true },
  ];
  return <Employees employeeList={employeeList} />;
}

export default App;
