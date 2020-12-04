import React from "react";
import PropTypes from "prop-types";
import { TableBody } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

const AgreementBody = ({ convenio, date, type, empresa, country, estado }) => {
  return (
    <TableBody>
      <tr>
        <td>{convenio}Holi</td>
        <td>{date}Holi</td>
        <td>{type}Holi</td>
        <td>{empresa}Holi</td>
        <td>{country}Holi</td>
        <td>{estado}Holi</td>
        <td>
          <GetAppIcon />
        </td>
      </tr>
    </TableBody>
  );
};

AgreementBody.propTypes = {
  // convenio: PropTypes.string.isRequired,
  // date: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  // empresa: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired,
  // estado: PropTypes.string.isRequired,
};

export default AgreementBody;
