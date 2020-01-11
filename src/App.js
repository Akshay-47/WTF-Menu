import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import SingleCoursePage from "./components/SingleCoursePage";
import Cart from "./components/Cart";

import "./App.scss";

function App() {
  return (
    <Router basename="/WTF">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tabs" component={SingleCoursePage} />
      </Switch>
      <Cart />
    </Router>
  );
}

export default App;
