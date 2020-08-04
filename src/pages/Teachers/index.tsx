import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/icons/back.svg";
import logoImg from "../../assets/logo.svg";

function Teachers() {
  return (
    <div id="page-teachers-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>

          <img src={logoImg} alt="Logo" />
        </div>

        <div className="header-content">
          <strong>Estes são os proffys disponíveis</strong>
        </div>
      </header>
    </div>
  );
}
export default Teachers;
