import React, { useState } from 'react';
import './App.css';
import './assets/bootstrap4/css/bootstrap.css'

function App() {

  const [nome, setnome] = useState('')
  const [aparece, setaparece] = useState(false)


  function abreviar(str) {
    const [nome, ...sobrenomes] = str.split(' ');

    const abreviaturas = sobrenomes.reduce((arr, str) => {
      const letraGrande = str.match(/[A-ZÖÄÅÀÁÂÃÌÍÒÓÉÊÚ]/);
      if (!letraGrande) return arr;
      return arr.concat(`${letraGrande[0]}.`);
    }, []);

    return [nome, ...abreviaturas].join(' ');
  }
  


  return (
    <div className="App container">
      <h1 className="text-center">ABREVIADOR DE NOME</h1>
      <div className="gambiarra">
        <div className="row align-items-center">
          <input className="form-control col-md-6" value={nome.toUpperCase()} onChange={(e) => setnome(e.target.value)} placeholder="nome"/>
        </div>
        <div className="row ">
          <div className="label">Seu nome abreviado: {abreviar(nome)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
