"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center bg-cyan-500">
      <div className="w-full max-w-md p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Login
        </h1>
        <form className="space-y-6">
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
          <div className="flex flex-col items-center space-y-4">
            <a href="/dashboard">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Entrar
            </button>
            </a>
            <a href="/register">
            <button
              type="button"
              className="text-white hover:text-black"
            >
              Não tem uma conta? Cadastre-se
            </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
