import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../../../index.css";

const AddAgreement = ({ setInstituciones }) => {
  const [datos, setDatos] = useState({
    correo: "",
    direccion: "",
    nombre: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const mensajeExito = () => {
    alert("Registro Exitoso");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInstituciones((inst) => [datos, ...inst]);
  };

  return (
    <div className="formulario__registro">
      <h3>Formulario de Registro de Instituciones</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.correo}
            onChange={handleChange}
            name="correo"
            placeholder="Correo de la institucion"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.direccion}
            onChange={handleChange}
            name="direccion"
            placeholder="Direccion"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.nombre}
            onChange={handleChange}
            name="nombre"
            placeholder="Nombre de la institucion"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.telefono}
            onChange={handleChange}
            name="telefono"
            placeholder="Telefono"
            isrequired="true"
          />
        </div>
        <br />
        <div>
          <input
            type="submit"
            onClick={mensajeExito}
            value="Registrar"
            id="button"
            className="btn btn-danger"
          />
        </div>
      </form>
    </div>
  );
};

AddAgreement.propTypes = {
  setInstituciones: PropTypes.func.isRequired,
};

export default AddAgreement;
