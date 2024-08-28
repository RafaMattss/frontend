"use client";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("administrador");

  return (
    <div className="h-screen flex items-center justify-center bg-cyan-500">
      <div className="w-full max-w-md p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Cadastro
        </h1>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-cyan-900 text-white"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-cyan-900 text-white"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-cyan-900 text-white"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-cyan-900 text-white"
              required
            >
              <option value="administrador">Administrador</option>
              <option value="montador">Montador</option>
              <option value="tecnico">Técnico</option>
              <option value="analista">Analista</option>
            </select>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button
              type="button"
              onClick={() => window.location.href = "/"}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Cadastrar
            </button>
            <button
              type="button"
              onClick={() => window.location.href = "/"}
              className="text-white hover:text-black"
            >
              Já tem uma conta? Faça login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
