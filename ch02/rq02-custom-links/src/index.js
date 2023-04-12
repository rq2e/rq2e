import React from "react";
import ReactDOM from "react-dom/client";

class Link extends React.Component {
  render() {
    return React.createElement(
      "p",
      null,
      React.createElement(
        "a",
        { href: "//react.dev" },
        "Read more about React"
      )
    );
  }
}

const link1 = React.createElement(Link);
const link2 = React.createElement(Link);
const link3 = React.createElement(Link);
const group = React.createElement(React.Fragment, null, link1, link2, link3);
const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);
