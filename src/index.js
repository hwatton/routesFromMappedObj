import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/navbar";
import PathInfo from "../components/pathData.js";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            {PathInfo.map((item) => {
              return (
                <Route
                  key={item.id}
                  exact
                  path={item.url}
                  component={item.component}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
