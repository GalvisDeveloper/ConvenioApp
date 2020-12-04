import React from "react";
// import PropTypes from "prop-types";
import { TableBody } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

const AgreementBody = ({ convenio, date, type, empresa, country, estado }) => {
  return (
    <TableBody>
      <tr>
        <td>{convenio}Carrefour</td>
        <td>{date}17/12/2020</td>
        <td>{type}Macro</td>
        <td>{empresa}Carrefour Chevere</td>
        <td>{country}Venezuela</td>
        <td>{estado}Petare, Teques, Guaranito</td>
        <td>
          <GetAppIcon />
        </td>
      </tr>
    </TableBody>
  );
};

// AgreementBody.propTypes = {
// convenio: PropTypes.string.isRequired,
// date: PropTypes.string.isRequired,
// type: PropTypes.string.isRequired,
// empresa: PropTypes.string.isRequired,
// country: PropTypes.string.isRequired,
// estado: PropTypes.string.isRequired,
// };

export default AgreementBody;
