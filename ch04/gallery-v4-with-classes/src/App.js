import { Component } from 'react';

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
      <section>
        <Image index="1" title="Rhino" />
        <Image index="2" title="Gorilla" />
        <Image index="3" title="Tiger" />
        <Image index="4" title="Giraffe" />
      </section>
    );
  }
}

class Image extends Component {
  constructor(props) {
    super(props);
    this.id = 'image-'+Math.floor(Math.random()*1000000);
  }
  render() {
    return (
      <figure id={this.id}>
        <img
          src={`//lorempixel.com/200/100/animals/${this.props.index}/`}
          alt={this.props.title}
        />
        <figcaption>
          Species: {this.props.title}
        </figcaption>
      </figure>
    );
  }
}

export default App;
