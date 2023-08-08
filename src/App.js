import React, { useState } from 'react';
import './App.css';

function App() {
  const [placa, setPlaca] = useState('');
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');
  const [isFidelidade, setIsFidelidade] = useState(false);
  const valorBase = 18;
  const descontoFidelidade = 0.05;

  const handlePlacaChange = (event) => {
    setPlaca(event.target.value);
  };

  const handleEntradaChange = (event) => {
    setEntrada(event.target.value);
  };

  const handleSaidaChange = (event) => {
    setSaida(event.target.value);
  };

  const handleFidelidadeChange = (event) => {
    setIsFidelidade(event.target.checked);
  };

  const calcularValorTotal = () => {
    const horasEstacionado = (new Date(saida) - new Date(entrada)) / (1000 * 60 * 60); // Convertendo milissegundos para horas
    const valorSemDesconto = valorBase * Math.ceil(horasEstacionado / 12);
    const desconto = isFidelidade ? valorSemDesconto * descontoFidelidade : 0;
    return valorSemDesconto - desconto;
  };

  return (
    <div className="App">
      <h1>Estacionamento</h1>
      <div>
        <label>Placa do Veículo:</label>
        <input type="text" value={placa} onChange={handlePlacaChange} />
      </div>
      <div>
        <label>Hora de Entrada:</label>
        <input type="datetime-local" value={entrada} onChange={handleEntradaChange} />
      </div>
      <div>
        <label>Hora de Saída:</label>
        <input type="datetime-local" value={saida} onChange={handleSaidaChange} />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isFidelidade} onChange={handleFidelidadeChange} />
          Cartão Fidelidade (5% de desconto)
        </label>
      </div>
      <div>
        <p>Valor Total: R$ {calcularValorTotal().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
