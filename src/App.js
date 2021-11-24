import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("green");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <ThemeContext.Provider value={["gray"]}>
                <SearchParams />
              </ThemeContext.Provider>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
