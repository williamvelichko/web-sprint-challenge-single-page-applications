import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <div className="order-pizza">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </nav>
      </header>

      <Route path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
