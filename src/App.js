import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Route path exact="/">
        <LandingPage />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
