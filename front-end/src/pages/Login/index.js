import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import logo from "../../assets/logo.png";
import "./style.css";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("user_id", response.data.id);
      history.push("/home");
    } catch (error) {
      alert("Email ou senha incorretos, tente novamente");
      setPassword("");
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <div className="card">
        <img src={logo} alt="card" />
        <div className="card-inp">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button>Entrar</button>
            <p className="link">
              Ainda não é cadastrado? <Link to="/register">Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
