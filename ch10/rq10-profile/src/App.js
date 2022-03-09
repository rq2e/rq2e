import './style.css';
import Menu from './Menu';
import Main from './Main';
import { MenuProvider } from './Context';

function App() {
  return (
    <MenuProvider>
      <header>
        <Menu />
      </header>
      <Main />
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </MenuProvider>
  );
}

export default App;
