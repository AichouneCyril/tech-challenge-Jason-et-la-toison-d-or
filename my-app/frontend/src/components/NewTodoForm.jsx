import React, { useReducer } from "react";
import "./newTodoForm.css";
import RowingIcon from "@mui/icons-material/Rowing";
import { v4 as uuid } from "uuid";
import axios from "axios";

function NewTodoForm({ createTodo }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: "",
      getTodo: [],
    }
  );

  const id = uuid();

  const handleChange = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/todolist", {
      id: id,
      task: userInput.task,
    });

    const name = e.target.name;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/todolist", {
      id: id,
      task: userInput.task,
    });

    const newTodo = { id, task: userInput.task, completed: false };
    createTodo(newTodo);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task" />
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder=" nouveau membre "
        maxLength={15}
        style={{
          width: "auto",
          height: "5vh",
          fontSize: "1.5rem",
        }}
      ></input>
      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          width: "auto",
          height: "5vh",
          fontSize: "1.5rem",
          color: "#fff",
          padding: "0em 2em 0em 2em",
        }}
      >
        <RowingIcon
          style={{
            fontSize: "2rem",
          }}
        />
        <br />
        Welcome
      </button>
    </form>
  );
}

export default NewTodoForm;
