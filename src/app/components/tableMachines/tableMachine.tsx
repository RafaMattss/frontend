// components/Table.tsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Dado {
    nome: String,
    tipo: String,
    modelo: String,
    fabricacao: String,
    serie: String,
    localizacao: String,
    historico: String,
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
            <th className="px-4 py-2 text-left">Tipo</th>
            <th className="px-4 py-2 text-right">Modelo</th>
            <th className="px-4 py-2 text-right">Fabricacao</th>
            <th className="px-4 py-2 text-center">Serie</th>
            <th className="px-4 py-2 text-right">Localizacao</th>
            <th className="px-4 py-2 text-center">Historico</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="border-t border-cyan-200 text-black">
              <td className="px-4 py-2">{item.nome}</td>
              <td className="px-4 py-2">{item.tipo}</td>
              <td className="px-4 py-2 text-right">{item.modelo}</td>
              <td className="px-4 py-2 text-right">{item.fabricacao}</td>
              <td className="px-4 py-2 text-right">{item.serie}</td>
              <td className="px-4 py-2 text-right">{item.localizacao}</td>
              <td className="px-4 py-2 text-right">{item.historico}</td>
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
