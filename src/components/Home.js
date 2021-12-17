import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div className="img-wrapper">
      <img
        src="https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939__480.jpg"
        alt="users"
      />
      <Link to="/pizza">Pizza?</Link>
    </div>
  );
}
