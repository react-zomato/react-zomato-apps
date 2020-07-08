import React from "react";
import { Header } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/register"></Route>
        <Route exact path="/home"></Route>
        <Route exact path="/movies"></Route>
      </Switch>
    </Router>
  );
}

export default App;
