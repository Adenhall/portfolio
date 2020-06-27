import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.js";
import CV from "./pages/CV.js";
import Portfolio from "./pages/Portfolio.js";
import { Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cv" component={CV} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
