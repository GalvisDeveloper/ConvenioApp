import React from "react";
import { TableHead } from "@material-ui/core";

const InstTableHead = () => {
  return (
    <TableHead>
      <tr className="bg-danger">
        <th scope="col">Correo</th>
        <th scope="col">Direccion</th>
        <th scope="col">Nombre</th>
        <th scope="col">Telefono</th>
      </tr>
    </TableHead>
  );
};

export default InstTableHead;
