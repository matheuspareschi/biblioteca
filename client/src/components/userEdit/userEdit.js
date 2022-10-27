import React, { useEffect, useState } from "react";
import axios from "axios";
import { XCircle } from "phosphor-react";

const UserEdit = (props) => {
  const [userEdit, setUserEdit] = useState({...props.user});

  const onSubmit = (e) => {
    console.log(userEdit)
    e.preventDefault();
    axios.post("http://localhost:3002/api/alterUser", {
      name: userEdit.nome,
      login: userEdit.usuario,
      password: userEdit.senha,
      email: userEdit.email,
      cell: userEdit.telefone,
      adress: userEdit.endereco,
      levelAcess: userEdit.nivel_idnivel,
      userId: userEdit.idusuario,
    });
    props.setAdded(1)
  };

  return (
    <div className="userReg" style={{ display: props.display }}>
      <div className="userReg___container">
        <XCircle
          size={35}
          color="#ff9f1c"
          weight="duotone"
          onClick={() => props.setHide("none")}
          className="userReg___closeButton"
        />
        <h2 className="userReg___title"> Edição de Usuário </h2>

        <form className="userReg___form" onSubmit={onSubmit}>
          <div className="form___divInput">
            <p className="form__textInput"> Nome </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o nome do usuário..."
              value={userEdit.nome}
              onChange={(e) => {
                setUserEdit({ ...userEdit, nome: e.target.value });
              }}
              required
              size="40"
            />
          </div>
          <div className="form___divInput">
            <p className="form__textInput"> Login </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o novo login..."
              value={userEdit.usuario}
              onChange={(e) => {
                setUserEdit({ ...userEdit, usuario: e.target.value });
              }}
              required
              size="35"
            />
          </div>
          <div className="form___divInput">
            <p className="form__textInput"> Senha </p>
            <input
              className="form___input"
              type="password"
              placeholder="Digite a senha do usuário..."
              value={userEdit.senha}
              onChange={(e) => {
                setUserEdit({ ...userEdit, senha: e.target.value });
              }}
              required
              size="15"
            />
          </div>
          <div className="form___divInput">
            <p className="form__textInput"> E-mail </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o e-mail do usuário..."
              value={userEdit.email}
              onChange={(e) => {
                setUserEdit({ ...userEdit, email: e.target.value });
              }}
              required
              size="60"
            />
          </div>
          <div className="form___divInput">
            <p className="form__textInput"> Endereço </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o endereço do usuário..."
              value={userEdit.endereco}
              onChange={(e) => {
                setUserEdit({ ...userEdit, endereco: e.target.value });
              }}
              required
              size="87"
            />
          </div>
          <div className="form___divInput">
            <p className="form__textInput"> Telefone </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o telefone do usuário..."
              value={userEdit.telefone}
              onChange={(e) => {
                setUserEdit({ ...userEdit, telefone: e.target.value });
              }}
              required
            />
          </div>
          <div className="form___divInput">
            <p className="form__textInput"> É administrador? </p>
            <input
              onClick={() => {
                setUserEdit({ ...userEdit, nivel_idnivel: 1 });
              }}
              type="checkbox"
              value={userEdit.nivel_idnivel}
            />
          </div>
        </form>
        <button type="submit" className="form___registerUserButton" onClick={onSubmit}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default UserEdit;
