import { useState } from "react";

function Radio({ value, label, onChange, current }) {
  return (
    <label>
      <input
        type="radio"
        name="importance"
        checked={value === current}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

function Add({ handleAdd, handleCancel }) {
  const [data, setData] = useState({ title: "", importance: "low" });
  const onChangeTitle = (evt) =>
    setData((oldData) => ({ ...oldData, title: evt.target.value }));
  const onChangeImportance = (evt) =>
    setData((oldData) => ({ ...oldData, importance: evt.target.value }));
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Title:
        <input value={data.title} onChange={onChangeTitle} />
      </label>
      <Radio
        value="low"
        label="Low"
        current={data.importance}
        onChange={onChangeImportance}
      />
      <Radio
        value="medium"
        label="Medium"
        current={data.importance}
        onChange={onChangeImportance}
      />
      <Radio
        value="high"
        label="High"
        current={data.importance}
        onChange={onChangeImportance}
      />
      <Radio
        value="urgent"
        label="Urgent"
        current={data.importance}
        onChange={onChangeImportance}
      />
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
