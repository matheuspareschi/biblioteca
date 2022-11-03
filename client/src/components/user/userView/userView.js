import React, { useEffect, useState } from "react";
import UserEdit from "../userEdit/userEdit";
import axios from "axios";


import "./userView.css";

const UserView = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [hide, setHide] = useState("none");

  useEffect(() => {
    axios.get("http://localhost:3002/api/getAllUser").then((data) => {
      setUsers(data.data)
    })
  }, [props.added]);

  const onClickEdit = (user) => {
    setUser(user);
    setHide(true);
  };

  return (
    <div className="userView___container">
      <h1 className="userView___title"> Vizualização de usuários </h1>
      <div className="userView__cardContainer">
        <table className="userView___table">
          <thead>
            <tr>
              <th> Nome </th>
              <th> Endereço </th>
              <th> Telefone </th>
              <th> Usuário</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => {
            return (
              <tr key={user.idUsuario}>
                <td> {user.nome} </td>
                <td> {user.endereco}</td>
                <td> {user.telefone} </td>
                <td> {user.usuario} </td>
                <td>
                  <button
                    className="cardButton"
                    onClick={() => onClickEdit(user)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      {user && (
        <UserEdit
          display={hide}
          setHide={setHide}
          user={user}
          setAdded={props.setAdded}
        />
      )}
    </div>
  );
};


export default UserView;