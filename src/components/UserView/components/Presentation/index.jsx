import React from "react";
import "../../../../index.css";
import { Link } from 'react-router-dom';

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
        <ul>
          <Link to="/reportes" className="btn btn-danger">
            Generar reportes
          </Link>
          <Link to="/gestionConvenios" className="btn btn-danger">
            Registrar Convenio
          </Link>
          <Link to="/instituciones" className="btn btn-danger">
            Consultar Instituciones
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Presentation;
