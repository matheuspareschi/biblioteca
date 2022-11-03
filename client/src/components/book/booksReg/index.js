import React, { useState } from "react";
import "./bookReg.css";
import { XCircle } from "phosphor-react";
import axios from "axios";

const BookReg = (props) => {
  const [newBook, setNewBook] = useState({pendente: 1});

  const onSubmit = () => {
    axios.post("http://localhost:3002/api/createBook", {
      titulo: newBook.titulo,
      edicao: newBook.edicao,
      isbn: newBook.isbn,
      genero: newBook.genero,
      autor: newBook.autor,
      imagem: newBook.imagem,
      quantidade: newBook.quantidade,
      pendente: newBook.pendente
    });
  };

  return (
    <div className="bookReg">
      <div className="bookReg___container">
        <XCircle
          size={35}
          color="#ff9f1c"
          weight="duotone"
          onClick={() => props.setHide("none")}
          className="bookReg___closeButton"
        />
        <h1 className="bookReg___title"> Cadastro de Usuário </h1>

        <form className="bookReg___form" onSubmit={onSubmit}>
          <div className="bookReg__divInput">
            <p className="form__textInput"> Titulo </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o titulo do usuário..."
              value={newBook.titulo}
              onChange={(e) => {
                setNewBook({ ...newBook, titulo: e.target.value });
              }}
              required
              size="40"
            />
          </div>
          <div className="bookReg__divInput">
            <p className="form__textInput"> Autor </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o novo autor..."
              value={newBook.autor}
              onChange={(e) => {
                setNewBook({ ...newBook, autor: e.target.value });
              }}
              required
              size="35"
            />
          </div>
          <div className="bookReg__divInput">
            <p className="form__textInput"> Ediçãp </p>
            <input
              className="form___input"
              type="password"
              placeholder="Digite a ediçãp..."
              value={newBook.edicao}
              onChange={(e) => {
                setNewBook({ ...newBook, edicao: e.target.value });
              }}
              required
              size="15"
            />
          </div>
          <div className="bookReg__divInput">
            <p className="form__textInput"> ISBN </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o ISBN do usuário..."
              value={newBook.isbn}
              onChange={(e) => {
                setNewBook({ ...newBook, isbn: e.target.value });
              }}
              required
              size="60"
            />
          </div>
          <div className="bookReg__divInput">
            <p className="form__textInput"> Genero </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o genero do usuário..."
              value={newBook.genero}
              onChange={(e) => {
                setNewBook({ ...newBook, genero: e.target.value });
              }}
              required
              size="87"
            />
          </div>
          <div className="bookReg__divInput">
            <p className="form__textInput"> Link da imagem </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o link da imagem do usuário..."
              value={newBook.imagem}
              onChange={(e) => {
                setNewBook({ ...newBook, imagem: e.target.value });
              }}
              required
            />
          </div>
          <div className="bookReg__divInput">
            <p className="form__textInput"> Quantidade de livros disponveis </p>
            <input
              className="form___input"
              type="text"
              placeholder="Digite o link da imagem do usuário..."
              value={newBook.quantidade}
              onChange={(e) => {
                setNewBook({ ...newBook, quantidade: e.target.value });
              }}
              required
            />
          </div>
        </form>
        <button
          type="submit"
          className="form___registerUserButton"
          onClick={() => onSubmit()}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default BookReg;
