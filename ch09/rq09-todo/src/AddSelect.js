import { useState } from "react";

function Add({ handleAdd, handleCancel }) {
  const [data, setData] = useState({ title: "", priority: "low" });
  const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    setData((oldData) => ({ ...oldData, [key]: value }));
  };
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Title:
        <input value={data.title} name="title" onChange={onChange} />
      </label>
      <label>
        Priority:
        <select value={data.priority} name="priority" onChange={onChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
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
