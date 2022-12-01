const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api/todolist", (req, res) => {
  connection.query("SELECT * FROM todolist", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving the todolist");
    } else {
      res.json(results);
    }
  });
});

app.post("/api/todolist", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO todolist SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Error saving a todo");
    } else {
      res.sendStatus(200);
    }
  });

  app.delete("/api/todolist/:id", (req, res) => {
    const idTodo = req.params.id;
    connection.query("DELETE FROM todolist WHERE id = ?", [idTodo], (err) => {
      if (err) {
        res.status(500).send("Error deleting a todo");
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
