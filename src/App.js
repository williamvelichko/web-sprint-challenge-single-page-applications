import React, { useState } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
const info = {
  picture:
    "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
};

const App = () => {
  const [users, setUsers] = useState([info]);

  return (
    <div className="order-pizza">
      <header>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/pizza">Order</Link>
        </nav>
      </header>
      <h1>Lambda Eats</h1>

      <Route path="/">
        <Home users={users} />
      </Route>
    </div>
  );
};
export default App;
