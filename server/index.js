const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

// Creating user
app.post("/api/createUser", (req, res) => {
  const name = req.body.name;
  const login = req.body.login;
  const password = req.body.password;
  const email = req.body.email;
  const adress = req.body.adress;
  const cell = req.body.cell;
  const levelAcess = req.body.levelAcess;

  db.query(
    "INSERT INTO usuario (nome, usuario, senha, telefone, email, endereco, nivel_idnivel) VALUES (?, ?, ?, ?, ?, ?, ?)",
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
    "UPDATE usuario SET nome = ?, usuario = ?, senha =?, telefone=?, email=?, endereco=?, nivel_idnivel=? WHERE idusuario = ?",
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

// Search one book

// Get all book

// Get an autor 

// Create book

// Alter book

// loaning

// checagem de ISBN 

//


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
