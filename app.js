import React from "react";
import ReactDOM from "react-dom/client";

// React Element

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

// jsx
const jsxHEading = <h1 id="heading">this heading using JSX</h1>;

// React functional component
const HeadingComponent = () => {
  return (
    <div>
      <h1>React functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
