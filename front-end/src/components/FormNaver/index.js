import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

import { v4 as uuidv4 } from "uuid";
import Modal from "../UI/Modal/Modal";
import api from "../../services/api";

import vector from "../../assets/Vector.png";
import "./style.css";

export default function FormNaver() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [projects, setProjects] = useState("");
  const [office, setOffice] = useState("");
  const [time, setTime] = useState("");
  const [url, setUrl] = useState("");
  const [modalvisible, setModalvisible] = useState(false);

  useEffect(() => {
    async function edition() {
      const res = await api.get("/users/registrations");
      console.log("ooooooo", res);
    }
    edition();
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put("/users/registrations", {
      name,
      age,
      projects,
      office,
      time,
      url,
      user_id: uuidv4(),
    });
  }

  const purchaseCancelHandler = () => {
    setModalvisible(false);
  };

  return (
    <div className="formnaver-container-edit">
      <Modal show={modalvisible} modalClosed={purchaseCancelHandler}>
        <div className="moda-container">
          <div className="inf-close">
            <Link onClick={purchaseCancelHandler}>
              <MdClose color="#212121" size={16} />
            </Link>
          </div>
          <strong>Naver atualizado</strong>
          <span>Naver atualizado com sucesso...</span>
        </div>
      </Modal>

      <div className="formnaver-header-edit">
        <div className="formnaver-img-edit">
          <Link to="/home">
            <img src={vector} alt="vector" />
          </Link>

          <strong>Editar Naver</strong>
        </div>

        <form onSubmit={handleSubmit} className="form-edit">
          <div className="flex-group-edit">
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
          <button onClick={() => setModalvisible(true)} type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
