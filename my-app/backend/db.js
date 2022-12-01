const mysql = require("mysql2/promise");
const connection = mysql.createconnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todorgonaute",
});

module.exports = connection;
