import React, { useState } from "react";
import AddAgreement from "../AddAgreement";
import { AgreementBody, AgreementHead } from "../AgreementTable";

const Main = () => {
  const [convenios, setConvenios] = useState([]);

  return (
    <div className="tabla__convenios">
      <h1>Convenios de Ingenieria de Sistemas</h1>
      <AddAgreement setConvenios={setConvenios} />
      <div className="tabla">
        <table>
          {/* head de la tabla */}
          <AgreementHead />
          {/* body de la tabla */}
          {convenios.map((convenio) => (
            <AgreementBody key={convenio} convenio={convenio} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Main;
