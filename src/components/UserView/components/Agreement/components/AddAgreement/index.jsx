import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../../../../index.css";

const AddAgreement = ({ setConvenios }) => {
  const [datos, setDatos] = useState({
    convenio: "",
    date: "",
    type: "",
    empresa: "",
    country: "",
    estado: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos((conv) => [datos, ...conv]);
  };

  return (
    <div className="formulario__registro">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.convenio}
            onChange={handleChange}
            name="convenio"
            placeholder="Nombre del convenio"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            value={datos.date}
            onChange={handleChange}
            name="date"
            placeholder="Fecha del convenio"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.type}
            onChange={handleChange}
            name="type"
            placeholder="Tipo de convenio"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.empresa}
            onChange={handleChange}
            name="empresa"
            placeholder="Empresa"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.country}
            onChange={handleChange}
            name="country"
            placeholder="Pais"
            isrequired="true"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={datos.estado}
            onChange={handleChange}
            name="estado"
            placeholder="Estado"
            isrequired="true"
          />
        </div>
        <br />
        <div>
          <input
            type="submit"
            onClick={handleSubmit}
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
  setConvenios: PropTypes.func.isRequired,
};

export default AddAgreement;
