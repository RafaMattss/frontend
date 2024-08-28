"use client";
import { AiFillEnvironment } from "react-icons/ai";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside/aside";
import { Card } from "../components/page/card";
import Table from "../components/tableMaintanence/tableMaintanance";
import { useState } from "react";
import ModalCriarManutencao from "../components/modalMaintanence/modalMaintanence";

const cards = [
  {
    color: "bg-yellow-500",
    qty: "10",
    text: "Manutenções Pendentes",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-blue-500",
    qty: "5",
    text: "Manutenções em Andamento",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-green-500",
    qty: "15",
    text: "Manutenções Concluídas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-red-500",
    qty: "2",
    text: "Manutenções Canceladas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
];

const manutencoes = [
  {
    descricao: "Troca de filtro de ar",
    data: "2024-08-20",
    prioridade: "Alta",
    responsavel: "Carlos",
    status: "Pendente",
    equipe: "Equipe A",
    pecasMateriais: "Filtro de Ar",
  },
  {
    descricao: "Substituição de óleo do motor",
    data: "2024-08-18",
    prioridade: "Média",
    responsavel: "Ana",
    status: "Em Andamento",
    equipe: "Equipe B",
    pecasMateriais: "Óleo 5W30, Filtro de Óleo",
  },
  {
    descricao: "Verificação de sistema elétrico",
    data: "2024-08-15",
    prioridade: "Baixa",
    responsavel: "Pedro",
    status: "Concluída",
    equipe: "Equipe C",
    pecasMateriais: "Multímetro",
  },
  {
    descricao: "Troca de pastilhas de freio",
    data: "2024-08-10",
    prioridade: "Alta",
    responsavel: "João",
    status: "Concluída",
    equipe: "Equipe A",
    pecasMateriais: "Pastilhas de Freio",
  },
  {
    descricao: "Revisão geral",
    data: "2024-08-05",
    prioridade: "Média",
    responsavel: "Maria",
    status: "Cancelada",
    equipe: "Equipe B",
    pecasMateriais: "Diversos",
  },
];

export default function GerenciamentoManutencoes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 p-6 bg-cyan-500">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Gerenciamento de Manutenções
          </h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
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
                  Solicitações de Manutenção
                </h1>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                >
                  Cadastrar Solicitação
                </button>
              </div>
              <div className="max-h-96 overflow-x-auto">
                <Table dados={manutencoes} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <ModalCriarManutencao
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
