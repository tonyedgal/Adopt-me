import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Spiky" animal="Dog" breed="Ihasa Apso" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Baby" animal="Dog" breed="German Shepherd" />
    </div>
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
