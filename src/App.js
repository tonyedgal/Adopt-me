import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Spiky",
      animal: "Dog",
      breed: "ihasa Apso",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Baby",
      animal: "Dog",
      breed: "German Shepherd",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
