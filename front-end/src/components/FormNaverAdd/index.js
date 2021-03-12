import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

import Modal from "../UI/Modal/Modal";
import api from "../../services/api";

import vector from "../../assets/Vector.png";
import "./style.css";

export default function FormNaverAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [projects, setProjects] = useState("");
  const [office, setOffice] = useState("");
  const [time, setTime] = useState("");
  const [url, setUrl] = useState("");
  const [visible, setVisible] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/users/registrations", {
      name,
      age,
      projects,
      office,
      time,
      url,
      user_id: Math.floor(Math.random() * 100000000000),
    });
  }

  const purchaseCancelHandler = () => {
    setVisible(false);
  };

  return (
    <div className="formnaver-container-add">
      <Modal show={visible} modalClosed={purchaseCancelHandler}>
        <div className="modal-container">
          <div className="info-close">
            <Link onClick={purchaseCancelHandler}>
              <MdClose color="#212121" size={16} />
            </Link>
          </div>
          <strong>Naver atualizado</strong>
          <span>Naver atualizado com sucesso...</span>
        </div>
      </Modal>

      <div className="formnaver-header-add">
        <div className="formnaver-img">
          <Link to="/home">
            <img src={vector} alt="vector" />
          </Link>

          <strong>Adicionar Naver</strong>
        </div>

        <form onSubmit={handleSubmit} className="form-add">
          <div className="flex-group-add">
            <div>
              <label htmlFor="name">
                Nome
                <input
                  id="name"
                  name="name"
                  placeholder="Nome"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <label htmlFor="age">
                Idade
                <input
                  id="age"
                  name="age"
                  placeholder="Idade"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </label>
              <label htmlFor="projects">
                Projetos que participou
                <input
                  id="projects"
                  name="projects"
                  placeholder="Projetos que participou"
                  value={projects}
                  onChange={(event) => setProjects(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="office">
                Cargo
                <input
                  id="office"
                  name="office"
                  placeholder="Cargo"
                  value={office}
                  onChange={(event) => setOffice(event.target.value)}
                />
              </label>
              <label htmlFor="time">
                Tempo de emprego
                <input
                  id="time"
                  name="time"
                  placeholder="Tempo de emprego"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </label>
              <label htmlFor="url">
                URL da foto do Naver
                <input
                  id="url"
                  name="url"
                  placeholder="Url da foto da Naver"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </label>
            </div>
          </div>
          <button onClick={() => setVisible(true)} type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
