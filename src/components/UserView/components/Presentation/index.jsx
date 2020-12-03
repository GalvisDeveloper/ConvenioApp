import React from "react";
import "./styles/index.css";

const Presentation = (props) => {
  return (
    <div className="presentation">
      <div className="presentation__img">
        <img src="presentacion.jpg" alt="Imagen de presentación" />
      </div>
      <div className="presentation__txt">
        <h2>{props.msg}</h2>
      </div>
    </div>
  );
};

export default Presentation;
