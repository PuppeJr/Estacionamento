import React, { useState } from 'react';
import './App.css';

function App() {
  const [placa, setPlaca] = useState('');
  const [horas, setHoras] = useState('');
  const [isFidelidade, setIsFidelidade] = useState(false);
  const valorBase = 18;
  const descontoFidelidade = 0.05;

  const handlePlacaChange = (event) => {
    setPlaca(event.target.value);
  };

  const handleHorasChange = (event) => {
    setHoras(event.target.value);
  };

  const handleFidelidadeChange = (event) => {
    setIsFidelidade(event.target.checked);
  };

  const calcularValorTotal = () => {
    const valorSemDesconto = valorBase * Math.ceil(horas / 12);
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
        <label>Horas de Uso:</label>
        <input type="number" value={horas} onChange={handleHorasChange} />
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


/* App.js: Este é o componente principal do seu aplicativo. 
Aqui é onde você começa a definir a estrutura e o comportamento do seu aplicativo.
 Outros componentes podem ser importados aqui e compostos para construir o aplicativo. */