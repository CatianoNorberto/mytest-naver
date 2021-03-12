import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function AddNaver() {
  return (
    <div className="addnaver">
      <h1>Navers</h1>
      <button>
        <Link to="/forms">Adicionar Navers</Link>
      </button>
    </div>
  );
}

export default AddNaver;
