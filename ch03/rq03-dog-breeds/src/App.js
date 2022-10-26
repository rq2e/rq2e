import { Component, Fragment } from "react";

class App extends Component {
  render() {
    const list = [
      { breed: "Chihuahua", description: "Small breed of dog." },
      { breed: "Corgi", description: "Cute breed of dog." },
      { breed: "Cumberland Sheepdog", description: "Extinct breed of dog." },
    ];
    return <Breeds list={list} />;
  }
}

class Breeds extends Component {
  render() {
    return (
      <dl>
        {this.props.list.map(({ breed, description }) => (
          <Fragment key={breed}>
            <dt>{breed}</dt>
            <dd>{description}</dd>
          </Fragment>
        ))}
      </dl>
    );
  }
}

export default App;
