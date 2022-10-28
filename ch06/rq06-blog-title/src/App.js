import { useEffect } from "react";

function BlogPost({ title, body }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <article>
      <h1>{title}</h1>
      {body}
    </article>
  );
}

function App() {
  return (
    <main>
      <BlogPost title="First post" body={<p>Welcome to my cool website.</p>} />
    </main>
  );
}

export default App;
