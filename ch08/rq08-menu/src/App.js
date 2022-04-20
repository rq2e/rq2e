import { useRef, useState, useEffect } from 'react';

function Menu() {
  const [isExpanded, setExpanded] = useState(false);    
  useEffect(() => {
    if (!isExpanded) {    
      return false;
    }
    const onWindowClick = () => setExpanded(false);    
    const onMenuClick = evt => evt.stopPropagation();    
    const menu = menuRef.current;    
    window.addEventListener('click', onWindowClick);    
    menu.addEventListener('click', onMenuClick);    
    return () => {
      window.removeEventListener('click', onWindowClick);    
      menu.removeEventListener('click', onMenuClick);    
    };
  }, [isExpanded]);    
  const menuRef = useRef(); 
  return (
    <main>
      <button onClick={() => setExpanded(true)}>Show menu</button>
      {isExpanded && (
        <aside 
          ref={menuRef}
          style={{border: '1px solid black', padding: '1em'}}
        >
          This is the menu
        </aside>
      )}
    </main>
  );
}

function App() {
  return <Menu />;
}

export default App;
