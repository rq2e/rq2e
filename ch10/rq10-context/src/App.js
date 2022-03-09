import './style.css';
import Menu from './Menu';
import { MenuProvider } from './Context';

function App() {
  return (
    <MenuProvider>
      <header>
        <Menu />
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </MenuProvider>
  );
}

export default App;
