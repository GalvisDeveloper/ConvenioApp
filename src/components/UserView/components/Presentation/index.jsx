import React from "react";
import "../../../../index.css";

const Presentation = (props) => {
  return (
    <div className="presentation">
      <div className="presentation__img">
        <img
          src="https://ww2.ufps.edu.co/public/imagenes/seccion/sistem1.png"
          alt="Imagen de presentación"
        />
      </div>
      <div className="presentation__txt">
        <h2>{props.msg}</h2>
      </div>
    </div>
  );
};

export default Presentation;
