import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;