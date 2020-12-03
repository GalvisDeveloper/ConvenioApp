import React from "react";

const AgreementHead = () => {
  return (
    <thead>
      <tr>
        {/* icono de busqueda*/}
        <input type="text" placeholder="Busque un convenio" />
      </tr>
      <tr>
        <th>Nombre del convenio</th>
        <th>Fecha del convenio</th>
        <th>Tipo de Convenio</th>
        <th>Empresa</th>
        <th>Pais</th>
        <th>Estado</th>
        <th>Descarga</th>
      </tr>
    </thead>
  );
};

export default AgreementHead;
