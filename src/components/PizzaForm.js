import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm(props) {
  const { value, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div id="pizza-form" onSubmit={onSubmit}>
      <img
        src="https://media.istockphoto.com/photos/bakery-chef-prepare-pizza-picture-id1291299956?b=1&k=20&m=1291299956&s=170667a&w=0&h=Ys_FLtdY0Uzc7yTQl6JzvCHTQ3eRAuqNNU4x8EX1FB8="
        alt="users"
      />
      <div id="order-pizza">
        <h2>Build Your Own Pizza</h2>
        <div id="name-input">
          <label>
            <h3>Name</h3>
            <div className="errors">{errors.name}</div>
            <input
              value={value.name}
              onChange={onChange}
              name="name"
              type="text"
              className="input-box"
            />
          </label>
        </div>
        <div id="size-dropdown">
          <label>
            <h3>Choice of Size</h3>
            <div className="errors">{errors.size}</div>
            <select
              value={value.size}
              onChange={onChange}
              name="size"
              className="input-box"
            >
              <option value="">--select size--</option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="x-large">x-large</option>
            </select>
          </label>
        </div>
        <div className="sauce-form">
          <h3>Choice of Sauce</h3>
          <div className="errors">{errors.sauce}</div>
          <label>
            <p>Original Red</p>
            <input
              type="radio"
              name="sauce"
              value="originalRed"
              checked={value.sauce === "originalRed"}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Garlic Ranch</p>
            <input
              type="radio"
              name="sauce"
              value="garlicRanch"
              checked={value.sauce === "garlicRanch"}
              onChange={onChange}
            />
          </label>
          <label>
            <p>BBQ Sauce</p>
            <input
              type="radio"
              name="sauce"
              value="bbqSauce"
              checked={value.sauce === "bbqSauce"}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Spinach Alfredo</p>
            <input
              type="radio"
              name="sauce"
              value="spinachAlfredo"
              checked={value.sauce === "spinachAlfredo"}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="toppings-form">
          <h3>Add Toppings</h3>
          <label>
            <p>Pepperoni</p>
            <input
              type="checkbox"
              name="pepperoni"
              checked={value.pepperoni}
              onChange={onChange}
            />
          </label>

          <label>
            <p>Canadian Bacon</p>
            <input
              type="checkbox"
              name="canadianBacon"
              checked={value.canadianBacon}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Grilled Chicken</p>
            <input
              type="checkbox"
              name="grilledChicken"
              checked={value.grilledChicken}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Onions</p>
            <input
              type="checkbox"
              name="onions"
              checked={value.onions}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Green Pepper</p>
            <input
              type="checkbox"
              name="greenPepper"
              checked={value.greenPepper}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Diced Tomatos</p>
            <input
              type="checkbox"
              name="dicedTomatos"
              checked={value.dicedTomatos}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Black Olives</p>
            <input
              type="checkbox"
              name="blackOlives"
              checked={value.blackOlives}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Three Cheese</p>
            <input
              type="checkbox"
              name="threeCheese"
              checked={value.threeCheese}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Pineapple</p>
            <input
              type="checkbox"
              name="pineapple"
              checked={value.pineapple}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Extra Cheese</p>
            <input
              type="checkbox"
              name="extraCheese"
              checked={value.extraCheese}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="gluten-form">
          <h2>Choice of Substitute</h2>
          <label>
            <h3>Gluten Free Crust</h3>
            <input
              type="checkbox"
              name="glutenFree"
              checked={value.glutenFree}
              onChange={onChange}
            />
          </label>
        </div>

        <div id="special-text">
          <label>
            <h2>Special Instructions</h2>
            <input
              value={value.extraStuff}
              onChange={onChange}
              name="extraStuff"
              type="text"
              className="input-box"
            />
          </label>
        </div>
        <div id="order-button">
          <Link to="/finalOrder">
            {" "}
            <button type="button" disabled={disabled} className="input-box">
              Add to Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
