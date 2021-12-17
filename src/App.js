import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import "./App.css";
import axios from "axios";
import formScheme from "./components/FormScheme";
import * as yup from "yup";

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
const initialFormErrors = {
  size: "",
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const getOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((resp) => {
        console.log(resp.data);
        setUsers([resp.data, ...users]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };
  const validate = (name, value) => {
    yup
      .reach(formScheme, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
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

      toppings: [
        "pepperoni",
        "canadianBacon",
        "grilledChicken",
        "onions",
        "greenPepper",
        "dicedTomatos",
        "blackOlives",
        "threeCheese",
        "pineapple",
        "extraStuff",
      ].filter((topping) => !!formValues[topping]),

      glutenItem: ["glutenFree"].filter((gluten) => !!formValues[gluten]),
    };
    getOrder(newOrder);
  };

  useEffect(() => {
    getOrder();
  }, []);

  useEffect(() => {
    formScheme.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);
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
