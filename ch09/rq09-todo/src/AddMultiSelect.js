import { useState } from "react";

function Add({ handleAdd, handleCancel }) {
  const [data, setData] = useState({ title: "", people: [] });
  const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    setData((oldData) => ({ ...oldData, [key]: value }));
  };
  const onChangePeople = (evt) => {
    const options = Array.from(evt.target.selectedOptions);
    const value = options.map((opt) => opt.value);
    setData((oldData) => ({ ...oldData, people: value }));
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Title:
        <input value={data.title} name="title" onChange={onChange} />
      </label>
      <label>
        People:
        <select
          value={data.people}
          name="people"
          onChange={onChangePeople}
          multiple
        >
          <option>Tinky Winky</option>
          <option>Po</option>
          <option>Laa-Laa</option>
          <option>Dipsy</option>
        </select>
      </label>
      <div>
        <button>Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Add;
