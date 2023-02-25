import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

const element = React.createElement(
  "div",
  {
    id: "app",
    className: "container",
  },
  "Hello World!"
);

ReactDOM.render(element, root);
