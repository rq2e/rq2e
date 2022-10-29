import { useState } from "react";

function Add({ handleAdd, handleCancel }) {
  const [data, setData] = useState({ title: "", isUrgent: false });
  const onChangeTitle = (evt) =>
    setData((oldData) => ({ ...oldData, title: evt.target.value }));
  const onChangeUrgent = (evt) =>
    setData((oldData) => ({ ...oldData, isUrgent: evt.target.checked }));
  const onSubmit = (evt) => {
    handleAdd(data);
    evt.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        Title:
        <input value={data.title} onChange={onChangeTitle} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={data.isUrgent}
          onChange={onChangeUrgent}
        />
        Urgent?
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
