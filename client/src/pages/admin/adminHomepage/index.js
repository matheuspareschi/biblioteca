import React, { useEffect } from "react";
import "./adminHomepage.css";

import { AddressBook, Books, Calendar, ChatCircleText } from "phosphor-react";

import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

const AdminHomepage = ({ user, selected }) => {
  const navegation = useNavigate();

  return (
    <div className="adminHomepage">
      <div className="adminHomepage___userContainer">
        <p className="userContainer___title"> Olá </p>
        <p className="userContainer___name"> {user[0].nome}. </p>
      </div>

      <div className="adminHomepage___optionsContainer">
        <button
          style={(selected = "user" && { background: "#ffbf695e;" })}
          onClick={() => navegation("/userDashboard")}
          className="optionsContainer___option"
        >
          <AddressBook size={32} color="#ff9f1c" weight="duotone" />
          <p className="option__text"> Painel de Usuários </p>
        </button>

        <button
          onClick={() => navegation("/booksDashboard")}
          className="optionsContainer___option"
        >
          <Books size={32} color="#ff9f1c" weight="duotone" />
          <p className="option__text"> Painel de Livros </p>
        </button>

        <button className="optionsContainer___option">
          <Calendar size={32} color="#ff9f1c" weight="duotone" />
          <p className="option__text"> Painel de empréstimo </p>
        </button>

        <button className="optionsContainer___option">
          <ChatCircleText size={32} color="#ff9f1c" weight="duotone" />
          <p className="option__text"> Painel de comentários </p>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

export default connect(mapStateToProps, null)(AdminHomepage);
