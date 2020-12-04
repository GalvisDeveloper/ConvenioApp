import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Nav = () => {
  return (
    <div className="nav">
      <div className="current__user">
        {/* {user} */}
        <h4>Administrador</h4>
      </div>
      <div className="menu__buttons">
        <AccountBoxIcon id="cuenta"/>
        <ExitToAppIcon id="salir"/>
      </div>
    </div>
  );
};

export default Nav;
