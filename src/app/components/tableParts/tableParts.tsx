// components/Table.tsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Dado {
    nome: String,
    codigo: String,
    fornecedor: String,
    quantidade: String,
    valor: String,
    entrada: String,
    saida: String,
}

interface TableProps {
  dados: Dado[];
}

const Table: React.FC<TableProps> = ({ dados }) => {
  return (
    <div className="max-w-full">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-cyan-900 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Codigo</th>
            <th className="px-4 py-2 text-right">Fornecedor</th>
            <th className="px-4 py-2 text-right">Quantidade</th>
            <th className="px-4 py-2 text-center">Valor</th>
            <th className="px-4 py-2 text-right">Entrada</th>
            <th className="px-4 py-2 text-center">Saida</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="border-t border-cyan-200 text-black">
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.codigo}</td>
              <td className="px-4 py-2 text-right">{item.fornecedor}</td>
              <td className="px-4 py-2 text-right">{item.quantidade}</td>
              <td className="px-4 py-2 text-right">{item.valor}</td>
              <td className="px-4 py-2 text-right">{item.entrada}</td>
              <td className="px-4 py-2 text-right">{item.saida}</td>
              <td className="px-4 py-2 text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-2">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
