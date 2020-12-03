import React from "react";
import { TableHead } from "@material-ui/core";

const AgreementHead = () => {
  return (
    <TableHead>
      <tr className="bg-danger">
        <th scope="col">Nombre del convenio</th>
        <th scope="col">Fecha del convenio</th>
        <th scope="col">Tipo de Convenio</th>
        <th scope="col">Empresa</th>
        <th scope="col">Pais</th>
        <th scope="col">Estado</th>
        <th scope="col">Descarga</th>
      </tr>
    </TableHead>
  );
};

export default AgreementHead;
