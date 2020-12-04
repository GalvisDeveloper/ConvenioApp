import React, { useState } from "react";
import AddInstitution from "../AddInstitution";
import InstTableHead from "./components/InstTableHead";
import InstTableBody from "./components/InstTableBody";
import { Table } from "@material-ui/core";

const InstitutionTable = () => {
  const [instituciones, setInstituciones] = useState([""]);

  return (
    <div className="tabla__institucion">
      <AddInstitution setInstituciones={setInstituciones} />

      <hr />
      <h3>Listado de Instituciones registradas</h3>
      <Table className="table">
        <InstTableHead />
        {instituciones.map((institucion) => (
          <InstTableBody key={institucion} institucion={institucion} />
        ))}
      </Table>
    </div>
  );
};

export default InstitutionTable;
