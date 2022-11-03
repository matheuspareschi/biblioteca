import axios from "axios";
import React, { useEffect, useState } from "react";
import "./bookView.css"

const BooksView = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/getAllBooks").then((data) => {
      setBooks(data.data);
      console.log(books)
    });
  }, []);

  return (
  <div className="booksView___container">
      <h1 className="booksView___title"> Vizualização de usuários </h1>
      <div className="booksView__cardContainer">
        <table className="booksView___table">
          <thead>
            <tr>
              <th> Titulo </th>
              <th> Edição </th>
              <th> ISBN </th>
              <th> Autor </th>
              <th> Genero </th>
              <th> Quantidade </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
          {books.map((book) => {
            return (
              <tr key={book.titulo}>
                <td> {book.titulo} </td>
                <td> {book.edicao}</td>
                <td> {book.isbn} </td>
                <td> {book.autor} </td>
                <td> {book.genero} </td>
                <td> {book.quantidade} </td>
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

  </div>
  );
};

export default BooksView;
