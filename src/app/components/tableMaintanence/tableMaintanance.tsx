import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Dado {
    descricao: string;
    data: string;
    prioridade: string;
    responsavel: string;
    status: string;
    equipe: string;
    pecasMateriais: string;
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
            <th className="px-4 py-2 text-left">Descrição</th>
            <th className="px-4 py-2 text-left">Data</th>
            <th className="px-4 py-2 text-right">Prioridade</th>
            <th className="px-4 py-2 text-right">Responsável</th>
            <th className="px-4 py-2 text-right">Status</th>
            <th className="px-4 py-2 text-right">Equipe</th>
            <th className="px-4 py-2 text-right">Peças/Materiais</th>
            <th className="px-4 py-2 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="border-t border-cyan-200 text-black">
              <td className="px-4 py-2">{item.descricao}</td>
              <td className="px-4 py-2">{item.data}</td>
              <td className="px-4 py-2 text-right">{item.prioridade}</td>
              <td className="px-4 py-2 text-right">{item.responsavel}</td>
              <td className="px-4 py-2 text-right">{item.status}</td>
              <td className="px-4 py-2 text-right">{item.equipe}</td>
              <td className="px-4 py-2 text-right">{item.pecasMateriais}</td>
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
