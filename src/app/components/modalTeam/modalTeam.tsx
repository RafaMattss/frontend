"use client";
import React, { useState } from "react";

interface ModalCriarEquipeProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalCriarEquipe({ isOpen, onClose }: ModalCriarEquipeProps) {
  const [formData, setFormData] = useState({
    nome: "",
    colaboradores: "",
    especialidade: "",
    disponibilidade: "",
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
        <h2 className="text-2xl font-bold mb-4">Cadastrar Nova Máquina</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome da Equipe"
            value={formData.nome}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="colaboradores"
            placeholder="Nome dos Colaboradoes"
            value={formData.colaboradores}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="especialidade"
            placeholder="Especialidade"
            value={formData.especialidade}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="disponibilidade"
            placeholder="Disponibilidade"
            value={formData.disponibilidade}
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
