import { Component } from "react";

class App extends Component {
  render() {
    return (
      <main>
        <h1>Animals</h1>
        <Gallery />
      </main>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <section style={{ display: "flex" }}>
        <Image index="1003" title="Deer" />
        <Image index="1020" title="Bear" />
        <Image index="1024" title="Vulture" />
        <Image index="1084" title="Walrus" />
      </section>
    );
  }
}

class Image extends Component {
  getImageSource(index) {
    return `//picsum.photos/id/${index}/150/150/`;
  }
  render() {
    return (
      <figure style={{ margin: "5px" }}>
        <img
          src={this.getImageSource(this.props.index)}
          alt={this.props.title}
        />
        <figcaption>
          <h3>Species: {this.props.title}</h3>
        </figcaption>
      </figure>
    );
  }
}

export default App;
