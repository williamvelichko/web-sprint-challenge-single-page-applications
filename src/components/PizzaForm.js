import React from "react";

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
    <div className="pizza-form" onSubmit={onSubmit}>
      <img src={props.users.picture2} alt="users" />
      <div className="name-input">
        <h2>Build Your Own Pizza</h2>
        <div className="size-dropdown">
          <label>
            <h3>Choice of Size</h3>
            <select value={value.size} onChange={onChange} name="size">
              <option value="">--select size--</option>\
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="x-large">x-large</option>
            </select>
          </label>
        </div>
        <div className="sauce-form">
          <h3>Choice of Sauce</h3>
          <label>
            <p>Original Red</p>
            <input
              type="checkbox"
              name="redSauce"
              checked={value.redSauce}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Garlic Ranch</p>
            <input
              type="checkbox"
              name="garlicRanch"
              checked={value.garlicRanch}
              onChange={onChange}
            />
          </label>
          <label>
            <p>BBQ Sauce</p>
            <input
              type="checkbox"
              name="bbqSauce"
              checked={value.bbqSauce}
              onChange={onChange}
            />
          </label>
          <label>
            <p>Spinach Alfredo</p>
            <input
              type="checkbox"
              name="spinachAlfredo"
              checked={value.spinachAlfredo}
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
              name="pepporoni"
              checked={value.pepporoni}
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

        <div className="special-text">
          <label>
            <h2>Special Instructions</h2>
            <input
              value={value.extraStuff}
              onChange={onChange}
              name="extraStuff"
              type="text"
            />
          </label>
        </div>
        <div className="order-button">
          <button disabled={disabled}>Add to Order</button>
        </div>
      </div>
    </div>
  );
}
