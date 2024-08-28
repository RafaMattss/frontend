"use client";
import React, { useState } from "react";

interface ModalCriarManutencaoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCriarManutencao({ isOpen, onClose }: ModalCriarManutencaoProps) {
  const [formData, setFormData] = useState({
    descricao: "",
    data: "",
    prioridade: "",
    responsavel: "",
    status: "",
    equipe: "",
    pecasMateriais: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
      style={{ zIndex: 1000 }}
    >
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Cadastrar Nova Solicitação de Manutenção</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="descricao"
            placeholder="Descrição do Problema"
            value={formData.descricao}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="date"
            name="data"
            placeholder="Data da Solicitação"
            value={formData.data}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="prioridade"
            placeholder="Prioridade"
            value={formData.prioridade}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="responsavel"
            placeholder="Responsável"
            value={formData.responsavel}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="status"
            placeholder="Status da Manutenção"
            value={formData.status}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="equipe"
            placeholder="Equipe Responsável"
            value={formData.equipe}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="pecasMateriais"
            placeholder="Peças/Materiais Utilizados"
            value={formData.pecasMateriais}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
