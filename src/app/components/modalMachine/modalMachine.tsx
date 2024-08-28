"use client";
import React, { useState } from "react";

interface ModalCriarMaquinaProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalCriarMaquina({ isOpen, onClose }: ModalCriarMaquinaProps) {
  const [formData, setFormData] = useState({
    nome: "",
    tipo: "",
    modelo: "",
    fabricacao: "",
    serie: "",
    localizacao: "",
    historico: "",
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
            placeholder="Nome da Máquina"
            value={formData.nome}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="tipo"
            placeholder="Tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="modelo"
            placeholder="Modelo"
            value={formData.modelo}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="date"
            name="fabricacao"
            placeholder="Data de Fabricação"
            value={formData.fabricacao}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="serie"
            placeholder="Número de Série"
            value={formData.serie}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="localizacao"
            placeholder="Localização"
            value={formData.localizacao}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="historico"
            placeholder="Histórico"
            value={formData.historico}
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
