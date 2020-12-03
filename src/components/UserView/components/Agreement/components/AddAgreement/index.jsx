import React, { useState } from "react";
import PropTypes from "prop-types";

const AddAgreement = ({ setConvenios }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue((conv) => [value, ...conv]);
  };

  return (
    <div className="formulario__registro">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Nombre del convenio"
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Fecha del convenio"
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Tipo de convenio"
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Empresa"
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Pais"
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Estado"
        />
      </form>
    </div>
  );
};

AddAgreement.propTypes = {
  setConvenios: PropTypes.func.isRequired,
};

export default AddAgreement;
