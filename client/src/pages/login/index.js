import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

import axios from "axios";

import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { Creators as userActions } from "../../app/actions/userActions";

const Login = ({user, setUser}) => {
  const [userToValidate, setUserToValidate] = useState({});
  const [err, setErr] = useState("");
  let navigate = useNavigate()

  //Requisição para o banco de dados
  async function validateUser() {
      await axios
        .post("http://localhost:3002/api/consulteUser", {
          user: userToValidate.user,
          password: userToValidate.password,
        })
        .then((data) => {
          setUser(data.data[0]);
          console.log(user)
        });
  }

  // Erro usuário e senha inválido
  useEffect(() => {
    if (user.length === 0 || user[0] !== undefined) {
        setErr("");
      } else if (user[0] === undefined) {
        setErr("Usuario ou senha inválidos");
      }
  }, [user]);

  // Navegação de acordo com usuário
  const navigation = () => {
    if (user[0].nivel == 1 && user !== undefined) {
        navigate('/AdminHomepage')
    } 
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) =>
            setUserToValidate({ ...userToValidate, user: e.target.value })
          }
        />
        <input
          type="text"
          onChange={(e) =>
            setUserToValidate({ ...userToValidate, password: e.target.value })
          }
        />
        <button onClick={() => validateUser()}>Acessar</button>
      </div>
      <p> {err} </p>
      {user.length > 0 && navigation()}
    </div>
  );
};

const mapStateToProps = state => {
    return {
      user: state.users.user
    }
  };
  
const mapDispatchToProps = dispatch => 
bindActionCreators (userActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
