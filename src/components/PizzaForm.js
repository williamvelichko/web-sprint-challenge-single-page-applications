import React from "react";

export default function PizzaForm(props) {
  const { value, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {};
  return (
    <div className="pizza-form" onSubmit={onSubmit}>
      <img src={props.users.picture2} alt="users" />
      <div className="name-input">
        <h3>Build Your Own Pizza</h3>
        <div className="size-dropdown">
          <label>
            <h4>Choice of Size</h4>
            <select value={value.size} onChange={onChange} name="size">
              <option value="">--select size--</option>\
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="x-large">x-large</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
