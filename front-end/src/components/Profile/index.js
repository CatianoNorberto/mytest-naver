import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit, MdClose } from "react-icons/md";

import Modal from "../UI/Modal/Modal";
import api from "../../services/api";

import "./style.css";

function Profile() {
  const [formedit, setFormedit] = useState([]);
  const [removed, setRemoved] = useState(false);
  const [modalvisibles, setModalvisibles] = useState(false);
  const [itemId, setItemId] = useState("");

  useEffect(() => {
    async function edition() {
      const res = await api.get("/users/registrations");
      setFormedit(res.data);
    }
    edition();
  }, []);

  //Funcão para deletar registros pelo id
  async function formdelete() {
    try {
      await api.delete(`/users/registrations/${itemId}`);

      setRemoved(true);
    } catch (error) {}
  }
  const purchaseCancelHandler = () => {
    setRemoved(false);
    setModalvisibles(false);
  };

  async function action(id) {
    setItemId(id);
    setModalvisibles(!modalvisibles);
  }

  return (
    <div className="profile-container">
      <Modal show={modalvisibles} modalClosed={purchaseCancelHandler}>
        {!removed ? (
          <div className="modal-containers">
            <strong>Naver atualizado</strong>
            <span>Naver atualizado com sucesso...</span>
            <div className="info-buttons">
              <button onClick={() => setModalvisibles(false)}>Cancelar</button>
              <button onClick={() => formdelete(true)}>Excluir</button>
            </div>
          </div>
        ) : (
          <div className="modals-container">
            <div className="infos-close">
              <Link onClick={purchaseCancelHandler}>
                <MdClose color="#212121" size={16} />
              </Link>
            </div>
            <strong>Naver atualizado</strong>
            <span>Naver atualizado com sucesso...</span>
          </div>
        )}
      </Modal>
      {formedit.map((item) => (
        <div className="profile" key={item.id}>
          <Link
            to={`/information/${item.id}`}
            className="profile"
            key={item.id}
          >
            <img src={item.url} alt="juliano" />
            <strong>{item.name}is</strong>
            <span>{item.office}</span>
          </Link>
          <div className="profile-icons">
            <MdDelete
              onClick={() => action(item.id)}
              color="#212121"
              size={24}
            />
            <Link to="/form">
              <MdEdit color="#212121" size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
