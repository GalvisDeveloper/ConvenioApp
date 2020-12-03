import React from "react";
import "../../../../index.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://lh3.googleusercontent.com/proxy/y_jMyjimFmdtORjxXvMfBuouIcrNsUsUxXdZSE0Q5ShpFjw7miZP3gxcWDVvzRAt7RqJ8TQj45jJpv4ZYVqIN60"
          alt="Logo de la UFPS"
        />
      </div>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};
export default Header;
