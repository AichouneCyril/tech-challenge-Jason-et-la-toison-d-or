import React, { useState } from "react";
import "./Todo.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Todo({ todo, remove, update, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (evt) => {
    evt.preventDefault();
    remove(todo.id);
  };

  const toggleFrom = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(todo.id, task);
    toggleFrom();
  };
  const handleChange = (evt) => {
    evt.preventDefault(); // <--- This is the line that is added
    setTask(evt.target.value);
  };

  const toggleCompleted = (evt) => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input
            type="text"
            value={task}
            OnClick={toggleCompleted}
            onChange={handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom} className="Todo-edit">
            <ModeEditIcon sx={{ fontSize: 40 }} />
          </button>
          <button onClick={handleClick} id={todo.id}>
            <DeleteForeverIcon sx={{ fontSize: 40 }} />
          </button>
        </div>
      </div>
    );
  }

  return result;
}

export default Todo;
