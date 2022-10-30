import { useData } from "./Context";

function Main() {
  const { isLoggedIn, login, logout } = useData();
  return (
    <main>
      <h1>Welcome to this website</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <button onClick={login}>Log in</button>
      )}
    </main>
  );
}

export default Main;
