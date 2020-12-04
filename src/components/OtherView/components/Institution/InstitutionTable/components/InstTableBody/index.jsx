import React from "react";
import { TableBody } from "@material-ui/core";

const InstTableBody = ({ correo, direccion, nombre, telefono }) => {
  return (
    <TableBody>
      <tr>
        <td>{correo}kapital_corp@gmail.com</td>
        <td>{direccion}Calle 6 #7-83 Barrio Latino</td>
        <td>{nombre}Kapital</td>
        <td>{telefono}3178054213</td>
      </tr>
    </TableBody>
  );
};

export default InstTableBody;
