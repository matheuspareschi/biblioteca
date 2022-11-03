const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Create user
app.post("/api/createUser", (req, res) => {
  const name = req.body.name;
  const login = req.body.login;
  const password = req.body.password;
  const email = req.body.email;
  const adress = req.body.adress;
  const cell = req.body.cell;
  const levelAcess = req.body.levelAcess;

  db.query(
    "INSERT INTO usuario (nome, usuario, senha, telefone, email, endereco, nivel) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, login, password, cell, email, adress, levelAcess],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Get all users
app.get("/api/getAllUser", (req, res) => {
  db.query("SELECT * FROM usuario", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Alter one user
app.post("/api/alterUser", (req, res) => {
  const name = req.body.name;
  const login = req.body.login;
  const password = req.body.password;
  const email = req.body.email;
  const adress = req.body.adress;
  const cell = req.body.cell;
  const levelAcess = req.body.levelAcess;
  const userId = req.body.userId

  db.query(
    "UPDATE usuario SET nome = ?, usuario = ?, senha =?, telefone=?, email=?, endereco=?, nivel=? WHERE idusuario = ?",
    [name, login, password, cell, email, adress, levelAcess, userId],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Validate an user
app.post("/api/consulteUser", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuario WHERE usuario = ? && senha = ?;", 
      [user, password], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Get all book
app.get("/api/getAllBooks", (req, res) => {
  db.query("SELECT * FROM livro", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Create book
app.post("/api/createBook", (req, res) => {
  const titulo = req.body.titulo;
  const edicao = req.body.edicao;
  const isbn = req.body.isbn;
  const imagem = req.body.imagem;
  const autor = req.body.autor;
  const genero = req.body.genero;
  const quantidade = req.body.quantidade;
  const pendente = req.body.pendente;

  db.query(
    "INSERT INTO livro (titulo, edicao, isbn, imagem, autor, genero, quantidade, pendente) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [titulo, edicao, isbn, imagem, autor, genero, quantidade, pendente],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});


// Alter book

// loaning

// checagem de ISBN 

//


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
