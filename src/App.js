import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Route>
        <Home />
      </Route>
    </div>
  );
}

export default App;
