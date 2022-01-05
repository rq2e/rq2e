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

function getImageSource(index) {
   return `//lorempixel.com/200/100/animals/${index}/`;
}

function Image({ index, title }) {
  return (
    <figure>
      <img src={getImageSource(index)} alt={title} />
      <figcaption>
        Species: {title}
      </figcaption>
    </figure>
  );
}

export default App;
