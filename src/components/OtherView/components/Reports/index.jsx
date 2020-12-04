import React from "react";

const Reports = () => {
  return (
    <div className="reportes">
      <div className="titleReportes">
        <hr />
        <h1>REPORTES</h1>
        <hr />
      </div>
      <div className="panels">
        <div className="panelStart">
          <table>
            <thead>
              <tr className="bg-danger">
                <th>Fecha Inicio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="date" name="fechaInicio" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="panelEnd">
          <table>
            <thead>
              <tr className="bg-danger">
                <th>Fecha Inicio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="date" name="fechaInicio" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="btnGenerar">
        <button className="btn btn-danger">Generar</button>
      </div>
    </div>
  );
};

export default Reports;
