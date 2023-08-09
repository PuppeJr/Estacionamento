import React, { useState } from 'react';

const exemploDadosDePagamento = [
  {
    id: 1,
    placa: 'ABC123',
    horas: 6,
    isFidelidade: false,
    valorTotal: 18,
  },
  // ... outros pagamentos
];

const ListaPage = () => {
  const [dadosDePagamento, setDadosDePagamento] = useState(exemploDadosDePagamento);

  return (
    <div>
      <h1>Lista de Pagamentos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Placa</th>
            <th>Horas</th>
            <th>Fidelidade</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {dadosDePagamento.map(pagamento => (
            <tr key={pagamento.id}>
              <td>{pagamento.id}</td>
              <td>{pagamento.placa}</td>
              <td>{pagamento.horas}</td>
              <td>{pagamento.isFidelidade ? 'Sim' : 'Não'}</td>
              <td>R$ {pagamento.valorTotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPage;
