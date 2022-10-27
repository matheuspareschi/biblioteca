const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "_Mat040698@",
  database: "mydb",
});

module.exports = db;
