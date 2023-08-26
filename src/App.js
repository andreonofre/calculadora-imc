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

    setResultado(imc);
    setAltura("");
    setPeso("");
  
  };

  const limpaCampos = () => {
    setResultado("");
    setClassificacao("");
    setAltura("");
    setPeso("");
  };


  //Renderização condicional
  const renderUserStatus = () => {
    if (resultado && classicacao ) {
      return (<p>Seu IMC é: <strong>{ resultado }</strong> { classicacao }</p>);
    } else {
      return <></>;
    }
  };


  console.log("ESSE: ", resultado);

  return (
    <div className="container">
      <div>
        <h2>Calculadora IMC</h2>
        <form className="inputUser">
          <label htmlFor="altura">Altura (m)</label>
          <input className="entrada" type="number" id="altura" onChange={handleAltura} />
          <label htmlFor="peso">Peso (kg)</label>
          <input className="entrada" type="number" id="peso" onChange={handlePeso} />
          <div className="btn">
          <input type="button" id="calcular" onClick={calculaImc} value="Calcular IMC" />
          <input type="button" id="limpar" onClick={limpaCampos} value="Limpar" />

          </div>
        </form>
        <div className="result">
          {renderUserStatus()}
          {/* {resultado && (
            <p>
              Seu IMC é: <strong>{resultado}</strong> {classicacao}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
