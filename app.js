import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello world from React "),
    React.createElement("h2", {}, "Hello world from React "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello world from React "),
    React.createElement("h2", {}, "Hello world from React "),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
