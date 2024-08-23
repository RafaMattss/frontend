"use client";
import React, { useState } from "react";

interface ModalCriarMaquinaProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalCriarPeca({ isOpen, onClose }: ModalCriarMaquinaProps) {
  const [formData, setFormData] = useState({
    nome: "",
    codigo: "",
    fornecedor: "",
    quantidade: "",
    valor: "",
    entrada: "",
    saida: "",
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
            placeholder="Nome da Peça"
            value={formData.nome}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="codigo"
            placeholder="Codigo"
            value={formData.codigo}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="fornecedor"
            placeholder="Fornecedor"
            value={formData.fornecedor}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="quantidade"
            placeholder="Quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="text"
            name="valor"
            placeholder="Valor"
            value={formData.valor}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="date"
            name="entrada"
            placeholder="Entrada"
            value={formData.entrada}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded text-black"
          />
          <input
            type="date"
            name="saida"
            placeholder="Saida"
            value={formData.saida}
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
