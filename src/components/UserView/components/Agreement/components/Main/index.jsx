import React, { useState } from "react";
import AddAgreement from "../AddAgreement";
import { AgreementBody, AgreementHead } from "../AgreementTable";
import SearchIcon from "@material-ui/icons/Search";
import "../../../../../../index.css";
import { Table } from "@material-ui/core";

const Main = () => {
  const [convenios, setConvenios] = useState(['']);

  return (
    <div className="tabla__convenios">
      <h1>Convenios de Ingenieria de Sistemas</h1>
      <hr/>
      <AddAgreement setConvenios={setConvenios} />

      <hr />

      <div className="busqueda">
        {/* icono de busqueda*/}
        <SearchIcon />
        <input type="text" placeholder="Busque un convenio" />
      </div>

      <br />

      <div className="tabla">
        <Table className="table">
          {/* head de la tabla */}
          <AgreementHead />
          {/* body de la tabla */}
          {convenios.map((convenio) => (
            <AgreementBody key={convenio} convenio={convenio} />
          ))}
        </Table>
      </div>
    </div>
  );
};

export default Main;
