"use client";
import { AiFillEnvironment } from "react-icons/ai";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside/aside";
import { Card } from "../components/page/card";
import Table from "../components/tableParts/tableParts";
import { BarChart } from "@tremor/react";
import { useState } from "react";
import ModalCriarPeca from "../components/modalPart/modalPart";

const cards = [
  {
    color: "bg-blue-500",
    qty: "100",
    text: "Peças em Estoque",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-red-500",
    qty: "5",
    text: "Peças em Falta",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-green-500",
    qty: "30",
    text: "Peças Recebidas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-yellow-500",
    qty: "20",
    text: "Peças Enviadas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
];

const dados = [
  {
    nome: "Pneu 14'",
    codigo: "PN001",
    fornecedor: "Fornecedor A",
    quantidade: "20",
    valor: "R$ 500,00",
    entrada: "2024-08-01",
    saida: "2024-08-15",
  },
  {
    nome: "Filtro de Óleo",
    codigo: "FO002",
    fornecedor: "Fornecedor B",
    quantidade: "15",
    valor: "R$ 150,00",
    entrada: "2024-07-10",
    saida: "2024-07-25",
  },
  {
    nome: "Correia Dentada",
    codigo: "CD003",
    fornecedor: "Fornecedor C",
    quantidade: "10",
    valor: "R$ 200,00",
    entrada: "2024-06-20",
    saida: "2024-07-05",
  },
  {
    nome: "Bateria 12V",
    codigo: "BT004",
    fornecedor: "Fornecedor D",
    quantidade: "8",
    valor: "R$ 400,00",
    entrada: "2024-07-15",
    saida: "2024-08-10",
  },
  {
    nome: "Pastilha de Freio",
    codigo: "PF005",
    fornecedor: "Fornecedor E",
    quantidade: "25",
    valor: "R$ 100,00",
    entrada: "2024-05-01",
    saida: "2024-06-15",
  },
  {
    nome: "Amortecedor",
    codigo: "AM006",
    fornecedor: "Fornecedor F",
    quantidade: "12",
    valor: "R$ 250,00",
    entrada: "2024-04-10",
    saida: "2024-05-25",
  },
  {
    nome: "Óleo de Motor 5W30",
    codigo: "OM007",
    fornecedor: "Fornecedor G",
    quantidade: "30",
    valor: "R$ 75,00",
    entrada: "2024-06-30",
    saida: "2024-07-20",
  },
  {
    nome: "Velas de Ignição",
    codigo: "VI008",
    fornecedor: "Fornecedor H",
    quantidade: "40",
    valor: "R$ 20,00",
    entrada: "2024-07-05",
    saida: "2024-08-05",
  },
  {
    nome: "Radiador",
    codigo: "RD009",
    fornecedor: "Fornecedor I",
    quantidade: "5",
    valor: "R$ 600,00",
    entrada: "2024-08-12",
    saida: "2024-08-22",
  },
  {
    nome: "Cabo de Acelerador",
    codigo: "CA010",
    fornecedor: "Fornecedor J",
    quantidade: "18",
    valor: "R$ 80,00",
    entrada: "2024-07-20",
    saida: "2024-08-10",
  },
  {
    nome: "Filtro de Ar",
    codigo: "FA011",
    fornecedor: "Fornecedor K",
    quantidade: "22",
    valor: "R$ 90,00",
    entrada: "2024-06-15",
    saida: "2024-07-10",
  },
  {
    nome: "Disco de Freio",
    codigo: "DF012",
    fornecedor: "Fornecedor L",
    quantidade: "14",
    valor: "R$ 320,00",
    entrada: "2024-05-05",
    saida: "2024-06-25",
  }
];


const chartdata = [
  {
    name: "Peças em Estoque",
    Número: 100,
  },
  {
    name: "Peças em Falta",
    Número: 5,
  },
  {
    name: "Peças Recebidas",
    Número: 30,
  },
  {
    name: "Peças Enviadas",
    Número: 20,
  },
];

export default function ControleEstoquePecas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 p-6 bg-cyan-500">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Controle de Estoque de Peças
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
                  Histórico de Peças
                </h1>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                >
                  Cadastrar Peça
                </button>
              </div>
              <div className="max-h-96 overflow-x-auto">
                <Table dados={dados} />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Estatísticas de Estoque
              </h3>
              <BarChart
                className="mt-6 font-bold text-white max-w-screen-md"
                data={chartdata}
                index="name"
                categories={["Número"]}
                colors={["blue"]}
                yAxisWidth={24}
              />
            </div>
          </div>
        </main>
      </div>
      <ModalCriarPeca
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
