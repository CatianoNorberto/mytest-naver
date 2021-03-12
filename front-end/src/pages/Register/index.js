import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import api from "../../services/api";
import { cpfMask } from "../../utils/inputMaks";
import { checkCpf } from "../../utils/cpfValidator";

import logo from "../../assets/logo.png";

import "./style.css";

const schema = Yup.object().shape({
  cpf: Yup.string().required("O campo cpf é obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("O campo email é obrigatório"),
  password: Yup.string().required("O campo senha é obrigatório"),
});

export default function Register({ history }) {
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (checkCpf(cpf)) {
      const emailExists = await api.get(`users/check-email?email=${email}`);

      if (emailExists.data.result) {
        alert(`O email ${email} já está cadastrado, tente novamente.`);
        return false;
      }
      const cpfExists = await api.get(`users/check-cpf?cpf=${cpf}`);

      if (cpfExists.data.result) {
        alert(`O cpf ${cpf} já está cadastrado, tente novamente.`);
        return false;
      }
      await api.post("./users", {
        cpf,
        email,
        password,
      });

      history.push("/");
    } else {
      alert(`O CPF ${cpf} é inválido, tente novamente.`);
    }
  }

  const handleCpfMask = (e) => {
    cpfMask(e);
    setCpf(e.target.value);
  };

  return (
    <div className="register-container">
      <div className="cards">
        <img src={logo} alt="card" />
        <div className="register-inp">
          <form onSubmit={handleSubmit} schema={schema} autoComplete="off">
            <label htmlFor="cpf">
              Cpf
              <input
                id="cpf"
                name="cpf"
                placeholder="Digite apenas os números"
                value={cpf}
                onChange={handleCpfMask}
              />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite o seu email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite a sua senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button type="submit">Cadastrar</button>
            <p className="link">
              <Link to="/">Voltar para página de login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
