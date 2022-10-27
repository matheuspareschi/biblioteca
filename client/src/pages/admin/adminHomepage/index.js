import React, { useEffect } from "react";

import {AddressBook, Books, Calendar, ChatCircleText} from 'phosphor-react';

import { connect } from 'react-redux';

import { useNavigate } from "react-router-dom";

const AdminHomepage = ({user}) => {

    const navegation = useNavigate();

    return (
        <div>
            {/* {user.nivel_idnivel !== 2 && navegation('/userDashboard')} */}
            <div className="adminHomepage___userContainer">
                <p> Bem vindo {user[0].nome} </p>
            </div>

            <div className="adminHomepage___optionsContainer">
                <button onClick={() => navegation('/userDashboard')} className="optionsContainer___option">
                    <AddressBook size={32} color="#2ec4b6" weight="thin" />
                    <p> Painel de Usuários </p>
                </button>

                <button onClick={() => navegation("/booksDashboard")} className="optionsContainer___option">
                    <Books size={32} color="#2ec4b6" weight="thin" />
                    <p> Painel de Livros </p>
                </button>

                <button className="optionsContainer___option">
                    <Calendar size={32} color="#2ec4b6" weight="thin" />
                    <p> Painel de empréstimo </p>
                </button>

                <button className="optionsContainer___option">
                    <ChatCircleText size={32} color="#2ec4b6" weight="thin" />
                    <p> Painel de comentários </p>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      user: state.users.user
    }
};
  

export default connect(mapStateToProps, null)(AdminHomepage);