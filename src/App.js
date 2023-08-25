import React, { useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [resultado, setResultado] = React.useState(null);

  const handlePeso = (event) => {
    setPeso(event.target.value);
  };

  const handleAltura = (event) => {
    setAltura(event.target.value);
  };

  const calculaImc = () => {
    const pesoFloat = Number(peso);
    const alturaFloat = Number(altura);
    const imc = pesoFloat / (alturaFloat * alturaFloat);
    console.log("Result: ",imc);
    setResultado(+imc);
  };

  const limpaCampos = () => {
    setAltura(0);
    setPeso(0);
    setResultado(0);
  }
  console.log("ESSE: ",resultado);

  return (
    <div className="container">
      <div>
        <h2>Calculadora IMC</h2>
        <form className="inputUser">
          <label htmlFor="altura">Altura (m)</label>
          <input type="number" id="altura" onChange={handleAltura}/>
          <label htmlFor="peso">Peso (Kg)</label>
          <input type="number" id="peso" onChange={handlePeso}/>
          <input type="button" onClick={calculaImc} value="Calcular IMC"/>

          <input type="button" onClick={limpaCampos} value="Limpar"/>
        </form>
        <div className="result">RESULTADO {resultado}</div>
      </div>
    </div>
  );
}

export default App;
