import React from "react";
import "./App.css";
import InputWithIcon from "./components/InputWithIcon";
import { blueGrey } from "@mui/material/colors";

const primary = blueGrey[500]; // #607d8b

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
          <label htmlFor="name">Nom de l'Argonaute</label>
          <InputWithIcon color={primary} />
          <button type="submit">Envoyer</button>
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
