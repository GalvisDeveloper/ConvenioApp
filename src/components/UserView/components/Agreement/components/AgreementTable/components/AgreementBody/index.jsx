import React from "react";
import PropTypes from "prop-types";

const AgreementBody = ({ props }) => {
  return (
    <tbody>
      <tr>
        <td>{props.nameAgreement}</td>
        <td>{props.date}</td>
        <td>{props.type}</td>
        <td>{props.business}</td>
        <td>{props.country}</td>
        <td>{props.state}</td>
        <td>{props.download}</td>
      </tr>
    </tbody>
  );
};

AgreementBody.propTypes = {
  nameAgreement: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  business: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
};

export default AgreementBody;