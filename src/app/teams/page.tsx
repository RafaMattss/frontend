"use client";
import { AiFillEnvironment } from "react-icons/ai";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside/aside";
import { Card } from "../components/page/card";
import Table from "../components/tableTeam/tableTeam";
import { useState } from "react";
import ModalCriarEquipe from "../components/modalTeam/modalTeam";

const cards = [
  {
    color: "bg-blue-500",
    qty: "5",
    text: "Equipes Disponíveis",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-red-500",
    qty: "2",
    text: "Equipes Ocupadas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-green-500",
    qty: "3",
    text: "Equipes em Manutenção",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
];

const equipes = [
  {
    nome: "Equipe A",
    colaboradores: "João, Maria, Carlos",
    especialidade: "Elétrica",
    disponibilidade: "Disponível",
  },
  {
    nome: "Equipe B",
    colaboradores: "Ana, Pedro",
    especialidade: "Mecânica",
    disponibilidade: "Ocupado",
  },
  {
    nome: "Equipe C",
    colaboradores: "Lucas, Fernanda",
    especialidade: "Hidráulica",
    disponibilidade: "Disponível",
  },
  {
    nome: "Equipe D",
    colaboradores: "Rafael, Beatriz",
    especialidade: "Eletrônica",
    disponibilidade: "Ocupado",
  },
  {
    nome: "Equipe E",
    colaboradores: "Gustavo, Aline",
    especialidade: "Mecatrônica",
    disponibilidade: "Em Manutenção",
  },
];

export default function GerenciamentoEquipes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 p-6 bg-cyan-500">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Gerenciamento de Equipes
          </h1>

          <div>
            <div className="grid grid-cols-3 gap-4 p-6">
              {cards.map((props) => (
                <Card
                  color={props.color}
                  qty={props.qty}
                  text={props.text}
                  icon={props.icon}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto p-10 gap-10 bg-cyan-700 rounded-lg flex-row">
            <div className="flex-1 align-middle">
              <div className="flex gap-12">
                <h1 className="text-2xl font-bold mb-4 text-center">
                  Equipes Cadastradas
                </h1>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                >
                  Cadastrar Equipe
                </button>
              </div>
              <div className="max-h-96 overflow-x-auto">
                <Table dados={equipes} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <ModalCriarEquipe
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
