import React from "react";
import { TableBody } from "@material-ui/core";

const InstTableBody = ({mail, direccion, name, tlf}) => {
  return (
    <TableBody>
      <tr>
        <td>{mail}Holi</td>
        <td>{direccion}Holi</td>
        <td>{name}Holi</td>
        <td>{tlf}Holi</td>
      </tr>
    </TableBody>
  );
};

export default InstTableBody;
