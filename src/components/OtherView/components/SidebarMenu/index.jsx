
import React from "react";


const SidebarMenu = () => {
  return (
    <div className="sidebar">
      <button type="button" className="btn btn-light">
        Instituciones
      </button>
      <button type="button" className="btn btn-danger">
        Convenios Vigentes
      </button>
      <button type="button" className="btn btn-light">
        Historial de Convenios
      </button>
      <button type="button" className="btn btn-danger">
        Reportes
      </button>
    </div>
  );
};


export default SidebarMenu;