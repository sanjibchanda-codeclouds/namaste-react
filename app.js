import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>this is heading</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <Title />
      <Title></Title>
      <h1>React functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
