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
      <MenuItem label="Home" href="/" className="logo" />
      <MenuItem label="About" href="/about/" id="about-link" />
      <MenuItem label="Blog" href="/blog" target="_blank" id="blog-link" />
    </ul>
  );
}

function MenuItem({ label, href, ...rest }) {
  return (
    <li>
      <a href={href} title={label} {...rest}>
        {label}
      </a>
    </li>
  );
}

export default App;
