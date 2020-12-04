import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="sidebar">
      <Link to="/instituciones" className="btn btn-light">
        Instituciones
      </Link>
      <button type="button" className="btn btn-danger">
        Convenios Vigentes
      </button>
      <button type="button" className="btn btn-light">
        Historial de Convenios
      </button>
      <Link to="/reportes" className="btn btn-danger">
        Reportes
      </Link>
    </div>
  );
};

export default SidebarMenu;
