import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="img-wrapper">
      <img src={props.users.picture} alt="users" />
      <Link to="/pizza">Pizza?</Link>
    </div>
  );
}
