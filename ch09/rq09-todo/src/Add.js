import { useState } from 'react';

function Add({ handleAdd, handleCancel }) {
  const [data, setData] = useState({
    title: '',
    category: '',
    date: '',
  });
  const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    setData(oldData => ({ ...oldData, [key]: value }));
  };
  const onSubmit = (evt) => {
    handleAdd(data);
    evt.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <label>
         Title:
         <input value={data.title} name="title" onChange={onChange} />
      </label>
      <label>
        Category:
        <input value={data.category} name="category" onChange={onChange} />
      </label>
      <label>
        Due date:
        <input type="date" value={data.date} name="date" onChange={onChange} />
      </label>
      <div>
        <button>Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Add;
