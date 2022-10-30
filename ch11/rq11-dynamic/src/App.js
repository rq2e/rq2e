import "./style.css";
import Menu from "./Menu";

function App() {
  const links = [
    { title: "Home", href: "/", icon: "home" },
    { title: "Services", href: "/services", icon: "services" },
    { title: "Pricing", href: "/pricing", icon: "pricing" },
    { title: "Blog", href: "/blog", icon: "blog" },
  ];
  return (
    <>
      <header>
        <Menu links={links} />
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </>
  );
}

export default App;
