import React, { useState } from "react";
import axios from "axios";
import "./userReg.css";
import { XCircle } from "phosphor-react";


const UserReg = (props) => {
  const [newUser, setNewUser] = useState({ levelAcess: 2 });

  const onSubmit = () => {
    axios.post("http://localhost:3002/api/createUser", {
      name: newUser.name,
      login: newUser.login,
      password: newUser.password,
      email: newUser.email,
      cell: newUser.cell,
      adress: newUser.adress,
      levelAcess: newUser.levelAcess,
    });
    setNewUser({ levelAcess: 2 });
    props.setAdded(1)
  };

  return (
    <div className="userReg">
      <div className="userReg___container">
        <XCircle
          size={35}
          color="#ff9f1c"
          weight="duotone"
          onClick={() => props.setHide("none")}
          className="userReg___closeButton"
        />
        <h1 className="userReg___title"> Cadastro de Usuário </h1>

        <form className="userReg___form" onSubmit={onSubmit}>
          <div className="form___divInput">
            <p className="form__textInput"> Nome </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o nome do usuário..."
              value={newUser.name}
              onChange={(e) => {
                setNewUser({ ...newUser, name: e.target.value });
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
              value={newUser.login}
              onChange={(e) => {
                setNewUser({ ...newUser, login: e.target.value });
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
              placeholder="Digite a senha..."
              value={newUser.password}
              onChange={(e) => {
                setNewUser({ ...newUser, password: e.target.value });
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
              value={newUser.email}
              onChange={(e) => {
                setNewUser({ ...newUser, email: e.target.value });
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
              value={newUser.adress}
              onChange={(e) => {
                setNewUser({ ...newUser, adress: e.target.value });
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
              value={newUser.cell}
              onChange={(e) => {
                setNewUser({ ...newUser, cell: e.target.value });
              }}
              required
            />
          </div>
          <div className="form___divInput">
            <p className="form__textInput"> É administrador? </p>
            <input
              onClick={() => {
                setNewUser({ ...newUser, levelAcess: 1 });
              }}
              type="checkbox"
              value={newUser.levelAcess}
            />
          </div>
        </form>
        <button type="submit" className="form___registerUserButton" onClick={()=> onSubmit()}>
          
          Cadastrar{" "}
        </button>
      </div>
    </div>
  );
};

export default UserReg;
