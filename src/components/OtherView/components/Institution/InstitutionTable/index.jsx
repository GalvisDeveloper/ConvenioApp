import React from "react";
import InstTableHead from "./components/InstTableHead";
import InstTableBody from "./components/InstTableBody";
import { Table } from "@material-ui/core";

const InstitutionTable = () => {
  return (
    <div className="tabla__institucion">
      <Table className="table">
        <InstTableHead />
        <InstTableBody />
      </Table>
    </div>
  );
};

export default InstitutionTable;
