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
  const password = req.body.password;
  const phone = req.body.phone;
  const email = req.body.email;
  const address = req.body.address;
  const addressNumber = req.body.addressNumber;
  const neighborhood = req.body.neighborhood;
  const city = req.body.city;
  const zipcode = req.body.zipcode;
  const rg = req.body.rg;
  const cpf = req.body.cpf;
  const dateOfBaptism = req.body.dateOfBaptism;
  const dateOfBirth = req.body.dateOfBirth;
  const job = req.body.job;
  const maritalStatus = req.body.maritalStatus;
  const levelAccess = 2
  const spouseName = req.body.spouseName


  db.query(
    "INSERT INTO members (name, password, phone, email, address, addressNumber, neighborhood, city, zipcode, rg, cpf, dateOfBaptism, dateOfBirth, job, maritalStatus, levelAccess, spouseName) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,? ,?, ?)",
    [name, password, phone, email, address, addressNumber, neighborhood, 
      city, zipcode, rg, cpf, dateOfBaptism, dateOfBirth, job, maritalStatus, levelAccess, spouseName ],
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
  db.query("SELECT * FROM members", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Alter one user
app.post("/api/alterUser", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const phone = req.body.phone;
  const email = req.body.email;
  const address = req.body.address;
  const addressNumber = req.body.addressNumber;
  const neighborhood = req.body.neighborhood;
  const city = req.body.city;
  const zipcode = req.body.zipcode;
  const rg = req.body.rg;
  const cpf = req.body.cpf;
  const dateOfBaptism = req.body.dateOfBaptism;
  const dateOfBirth = req.body.dateOfBirth;
  const job = req.body.job;
  const maritalStatus = req.body.maritalStatus;
  const levelAccess = req.body.levelAccess
  const userId = req.body.idMember
  const spouseName = req.body.spouseName

  db.query(
    "UPDATE members SET name = ?, password = ?, phone = ?, email = ?, address = ?, addressNumber = ?, neighborhood = ?, city = ?, zipcode = ?, rg = ?, cpf = ?, dateOfBaptism = ?, dateOfBirth = ?, job = ?, maritalStatus = ?, levelAccess = ?, spouseName = ? WHERE idMember = ?",
    [name, password, phone, email, address, addressNumber, neighborhood, city, zipcode, rg, cpf, dateOfBaptism, dateOfBirth, job, maritalStatus, levelAccess, spouseName, userId],
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
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM members WHERE email = ? && password = ?;",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Get all book
app.post("/api/getBooksFromUser", (req, res) => {
  const owner = req.body.owner

  db.query("SELECT * FROM libraryCollection WHERE owner = ?", [owner], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Get all book
app.get("/api/getAllBooks", (req, res) => {
  db.query("SELECT * FROM libraryCollection", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Get one book
app.post("/api/getBookFromId", (req, res) => {
  const idBook = req.body.idBook
  db.query("SELECT * FROM libraryCollection where idBook = ?", [idBook], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Create book
app.post("/api/createBook", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const genre = req.body.genre;
  const quantity = req.body.quantity;
  const pending = req.body.pending;
  const owner = req.body.owner;

  db.query(
    "INSERT INTO libraryCollection (title, author, genre, quantity, pending) VALUES (?, ?, ?, ?, ?)",
    [title, author, genre, quantity, pending],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Alter book
app.post("/api/alterBook", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const genre = req.body.genre;
  const quantity = req.body.quantity;
  const pending = req.body.pending;
  const idBook = req.body.idBook;

  db.query(
    "UPDATE libraryCollection SET title = ?, author = ?, genre = ?, quantity = ?, pending = ? where idBook = ?",
    [title, author, genre, quantity, pending, idBook],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Alter pending book
app.post("/api/alterPendingBook", (req, res) => {
  const idBook = req.body.idBook;
  const pending = req.body.pending;

  db.query(
    "UPDATE libraryCollection SET pending = ? WHERE idBook = ?",
    [pending, idBook],
    (err, result) => {
      if (err) {
        res.send(err)
        console.log(err);
      }
      res.send(result);
    })
})

// Create Loan
app.post("/api/createLoan", (req, res) => {
  const loanDate = req.body.loanDate;
  const returnDate = req.body.returnDate;
  const pending = req.body.pending;
  const idMember = req.body.idMember;
  const idBook = req.body.idBook;

  db.query(
    "INSERT INTO loan (loanDate, returnDate, pending, idMember, idBook) VALUES (?, ?, ?, ?, ?)",
    [loanDate, returnDate, pending, idMember, idBook],
    (err, result) => {
      if (err) {
        res.send(err)
        console.log(err);
      }
      res.send(result);
    }
  );
});

// Consult loaning from user
app.post("/api/userLoaning", (req, res) => {
  const idMember = req.body.idMember;

  db.query("SELECT * FROM loan WHERE pending = 2 && idMember = ?", [idMember], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Get all loan
app.get("/api/getAllLoan", (req, res) => {
  db.query("SELECT * FROM loan WHERE pending = 2", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

/// Update loan
app.post("/api/updateLoan", (req, res) => {
  idLoan = req.body.idLoan,
  pending = req.body.pending

  db.query(
    "UPDATE loan SET pending = ? WHERE idLoan = ?",
    [pending, idLoan],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
