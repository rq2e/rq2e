import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement("h1", null, "Hello world!");
const link = React.createElement("a", { href: "//react.dev" }, "Read more");
const group = React.createElement(React.Fragment, null, title, link);
const domElement = document.getElementById("root");
ReactDOM.createRoot(domElement).render(group);
