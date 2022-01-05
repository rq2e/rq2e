function App() {
  return (
    <main>
      <h1>Menu options:</h1>
      <Menu />
    </main>
  );
}

function Menu() {
  return (
    <ul>
      <MenuItem label="Home" href="/" target="_self" />
      <MenuItem label="About" href="/about/" target="_self" />
      <MenuItem label="Blog" href="/blog" target="_blank" />
    </ul>
  );
}

function MenuItem({ label, href, target }) {
  return (
    <li>
      <a href={href} title={label} target={target}>
        {label}
      </a>
    </li>
  );
}

export default App;
