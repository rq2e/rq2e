import { useState } from 'react';
import List from './List';
import Add from './Add';

function App() {
  const [items, setItems] = useState([]);
  const [isAdding, setAdding] = useState(false);

  const handleDelete = (item) => setItems(
    oldItems => oldItems.filter(oldItem => oldItem !== item)
  );
  const handleAdd = (newItem) => {
    setItems(oldItems => oldItems.concat([newItem]));
    setAdding(false);
  };
  const handleCancel = () => setAdding(false);

  return (
    <main>
      {/*<nav>
        <button onClick={() => setAdding(false)}>View list</button>
        <button onClick={() => setAdding(true)}>Add new item</button>
      </nav>*/}
      {isAdding
        ? <Add handleAdd={handleAdd} handleCancel={handleCancel} />
        : <List items={items} handleDelete={handleDelete} />
      }
    </main>
  );
}

export default App;
