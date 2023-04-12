import React from "react";
import ReactDOM from "react-dom/client";

class Link extends React.Component {
  render() {
    return React.createElement(
      "p",
      null,
      React.createElement("a", { href: this.props.url }, this.props.children)
    );
  }
}
const boldReact = React.createElement("strong", null, "React");
const link1 = React.createElement(Link, { url: "//react.dev" }, boldReact);
const link2 = React.createElement(Link, { url: "//vuejs.org" }, "Vue");
const link3 = React.createElement(Link, { url: "//angular.io" }, "Angular");
const group = React.createElement(React.Fragment, null, link1, link2, link3);
const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);
