import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <h2>Calculadora IMC</h2>
        <form className="inputUser">
          <label htmlFor="altura">Digite seu Peso</label>
          <input type="text" id="altura" />
          <label htmlFor="peso">Peso</label>
          <input type="text" id="peso" />
        </form>
      </div>
    </div>
  );
}

export default App;
