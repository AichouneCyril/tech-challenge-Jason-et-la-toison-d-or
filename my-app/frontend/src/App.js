import React from "react";
import "./App.css";
import { blueGrey } from "@mui/material/colors";
import TodoList from "./components/todolist";
//import { useForm } from "react-hook-form";

const primary = blueGrey[500]; // #607d8b

/*export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input type="undefined" placeholder="Poste" {...register} />

      <input type="submit" />
    </form>
  );
}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
          style={{ width: "500px" }}
        />
        <h1>Les Argonautes</h1>
      </header>
      <hr />
      <main>
        <h2>Ajouter un(e) Argonaute</h2>

        <form>
          <label htmlFor="name"></label>
          <TodoList color={primary} />
        </form>
      </main>
      <footer className="App-footer">
        <p>
          <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
