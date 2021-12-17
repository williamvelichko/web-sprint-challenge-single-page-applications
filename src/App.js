import React, { useState } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import "./App.css";
const info = {
  picture:
    "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__480.jpg",
  picture2:
    "https://media.istockphoto.com/photos/bakery-chef-prepare-pizza-picture-id1291299956?b=1&k=20&m=1291299956&s=170667a&w=0&h=Ys_FLtdY0Uzc7yTQl6JzvCHTQ3eRAuqNNU4x8EX1FB8=",
};
const initialFormValues = {
  size: "",
  redSauce: false,
  garlicRanch: false,
  bbqSauce: false,
  spinachAlfredo: false,

  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicyItalianSausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatos: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,

  glutenFree: false,
  extraStuff: "",
  amount: "",
};

const App = () => {
  const [users, setUsers] = useState(info);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState("");
  const [disabled, setDisabled] = useState(true);

  const getOrder = () => {};

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size.trim(),
      extraStuff: formValues.extraStuff.trim(),

      SauceChoice: [
        "redSauce",
        "garlicRanch",
        "bbbqSauce",
        "spinachAlfredo",
      ].filter((sauce) => !!formValues[sauce]),

      toppings: ["pepperoni"],
    };
  };

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
        <PizzaForm
          users={users}
          value={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
    </div>
  );
};
export default App;
