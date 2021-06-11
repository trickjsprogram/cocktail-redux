import React from "react";
import "./App.css";
import Home from "./pages";
import { Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cocktail/:id" component={SingleCocktail} />
      </Switch>
    </div>
  );
}

export default App;
