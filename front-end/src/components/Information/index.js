import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit, MdClose } from "react-icons/md";

import api from "../../services/api";

import "./style.css";

function Information(props) {
  const [informationView, setInformationView] = useState([]);

  useEffect(() => {
    async function edition() {
      const res = await api.get(
        `/users/registrations/${props.match.params.id}`
      );
      setInformationView(res.data);
    }
    edition();
  }, [props.match.params.id]);

  //Funcão para deletar registros pelo id
  async function infodelete(id) {
    await api.delete(`/users/registrations/${id}`);
  }

  return (
    <div className="info-container">
      <div className="info">
        <div className="image">
          <img src={informationView.url} alt="Juliano" />
        </div>
        <div className="all-info">
          <div className="info-close">
            <Link to="/home">
              <MdClose color="#212121" size={16} />
            </Link>
          </div>
          <div className="info-class">
            <h1>{informationView.name}</h1>
            <span>{informationView.office}</span>
            <h2>Idade</h2>
            <span>{informationView.age}</span>
            <h2>Tempo na empresa</h2>
            <span>{informationView.time}</span>
            <h2>Projetos que participou</h2>
            <span>{informationView.projects}</span>
          </div>
          <div className="info-icons">
            <MdDelete
              onClick={() => infodelete(informationView.id)}
              color="#212121"
              size={24}
            />
            <Link to="/form">
              <MdEdit color="#212121" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
