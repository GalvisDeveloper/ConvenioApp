import React from "react";
import './styles/index.css';

const Header = (props) => {
  return (
    <div className = "header">
      <div className="logo">
        <img src="imagen" alt="Logo de la UFPS" />
      </div>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};
export default Header;
