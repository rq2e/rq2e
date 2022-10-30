import { createContext, useContext } from "react";

const BUTTON_STYLE = {
  display: "inline-block",
  padding: "4px 10px",
  background: "transparent",
  border: "0",
};

const HEADER_STYLE = {
  display: "flex",
  justifyContent: "flex-end",
  borderBottom: "1px solid",
};

const NameContext = createContext();

function Button({ children }) {
  return <button style={BUTTON_STYLE}>{children}</button>;
}

function UserButton() {
  const name = useContext(NameContext);
  return <Button>👤 {name}</Button>;
}

function Header() {
  return (
    <header style={HEADER_STYLE}>
      <Button>Home</Button>
      <Button>Groups</Button>
      <Button>Profile</Button>
      <UserButton />
    </header>
  );
}

function Welcome() {
  const name = useContext(NameContext);
  return (
    <section>
      <h1>Welcome, {name}!</h1>
    </section>
  );
}

function Main() {
  return (
    <main>
      <Welcome />
    </main>
  );
}

function Dashboard({ name }) {
  return (
    <NameContext.Provider value={name}>
      <Header />
      <Main />
    </NameContext.Provider>
  );
}

function App() {
  return <Dashboard name="Alice" />;
}

export default App;
