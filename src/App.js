import React, { useState } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import "./App.css";
const info = {
  picture:
    "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__480.jpg",
};

const App = () => {
  const [users, setUsers] = useState(info);

  return (
    <div className="order-pizza">
      <header>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/pizza">Order</Link>
        </nav>
        <h1>Lambda Eats</h1>
      </header>

      <Route exact path="/">
        <Home users={users} />
      </Route>
      <Route path="/pizza">
        <PizzaForm />
      </Route>
    </div>
  );
};
export default App;
