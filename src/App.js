import React, { useState } from "react";
import "./App.css";

function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [resultado, setResultado] = React.useState(null);
  const [classicacao, setClassificacao] = React.useState("");

  const handlePeso = (event) => {
    setPeso(event.target.value);
  };

  const handleAltura = (event) => {
    setAltura(event.target.value);
  };

  const calculaImc = () => {
    const pesoFloat = Number(peso);
    const alturaFloat = Number(altura) / 100;
    const imc = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(2);

    if (altura === "" || peso === "") {
      alert("Por favor, preencha os campos para Calcular o seu IMC");
    } else if (imc < 18.5) {
      setClassificacao("Você está Abaixo do Peso");
    } else if (imc > 18.5 && imc < 24.9) {
      setClassificacao("Parabéns, você está com o peso ideal.");
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao("Parabéns, você está com o peso ideal.");
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao("Você está com Obesidade de Grau I, .");
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao("Você está com Obesidade de Grau II (severa).");
    } else if (imc > 40) {
      setClassificacao("Você está com Obesidade de Grau III (mórbida).");
    };

    setResultado(+imc);
  };

  const limpaCampos = () => {
    setAltura(0);
    setPeso(0);
    setResultado(0);
  };

  console.log("ESSE: ", resultado);

  return (
    <div className="container">
      <div>
        <h2>Calculadora IMC</h2>
        <form className="inputUser">
          <label htmlFor="altura">Altura (m)</label>
          <input type="number" id="altura" onChange={handleAltura} />
          <label htmlFor="peso">Peso (Kg)</label>
          <input type="number" id="peso" onChange={handlePeso} />
          <input type="button" onClick={calculaImc} value="Calcular IMC" />

          <input type="button" onClick={limpaCampos} value="Limpar" />
        </form>
        <div className="result">
          RESULTADO {resultado} {classicacao}
        </div>
      </div>
    </div>
  );
}

export default App;
