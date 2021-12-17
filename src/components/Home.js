import React from "react";

export default function Home(props) {
  return (
    <div>
      <img src={props.users.picture} alt="User" />
    </div>
  );
}
