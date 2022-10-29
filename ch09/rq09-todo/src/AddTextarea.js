import { useState } from "react";

function Add({ handleAdd, handleCancel }) {
  const [data, setData] = useState({ title: "", description: "" });
  const onChange = (evt) =>
    setData((oldData) => ({ ...oldData, [evt.target.name]: evt.target.value }));
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Title:
        <input value={data.title} name="title" onChange={onChange} />
      </label>
      <label>
        Description:
        <textarea
          value={data.description}
          name="description"
          onChange={onChange}
        />
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
