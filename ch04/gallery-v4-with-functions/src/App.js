import { useMemo } from 'react';

function App() {
  return (
    <main>
      <h1>Animals</h1>
      <Gallery />
    </main>
  );
}

function Gallery() {
  return (
    <section>
      <Image index="1" title="Rhino" />
      <Image index="2" title="Gorilla" />
      <Image index="3" title="Tiger" />
      <Image index="4" title="Giraffe" />
    </section>
  );
}

function Image({ index, title }) {
  const id = useMemo(
    () => 'image-'+Math.floor(Math.random()*1000000),
    [],
  );
  return (
    <figure id={id}>
      <img
        src={`//lorempixel.com/200/100/animals/${index}/`}
        alt={title}
      />
      <figcaption>
        Species: {title}
      </figcaption>
    </figure>
  );
}

export default App;
