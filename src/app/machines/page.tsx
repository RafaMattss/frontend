"use client"
import { AiFillEnvironment } from "react-icons/ai";
import { Footer } from "../components/footer";
import { Aside } from "../components/aside/aside";
import { Card } from "../components/page/card";
import Table from "../components/tableMachines/tableMachine";
import { BarChart } from "@tremor/react";
import { useState } from "react";
import ModalCriarMaquina from "../components/modalMachine/modalMachine";

const cards = [
  {
    color: "bg-red-500",
    qty: "50",
    text: "Máquinas Cadastradas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-blue-500",
    qty: "15",
    text: "Manutenções Pendentes",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-green-500",
    qty: "120",
    text: "Manutenções Realizadas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
  {
    color: "bg-yellow-500",
    qty: "20",
    text: "Peças Substituídas",
    icon: <AiFillEnvironment size={24} className="ml-4" />,
  },
];

const dados = [
    {
      nome: "Máquina 1",
      tipo: "Escavadeira",
      modelo: "CAT320",
      fabricacao: "2018-05-20",
      serie: "12345",
      localizacao: "Obra A",
      historico: "Troca de óleo - 2024-08-15",
    },
    {
      nome: "Máquina 2",
      tipo: "Pá Carregadeira",
      modelo: "VOLVO L60F",
      fabricacao: "2017-03-10",
      serie: "67890",
      localizacao: "Obra B",
      historico: "Substituição de filtro - 2024-07-30",
    },
    {
      nome: "Máquina 3",
      tipo: "Retroescavadeira",
      modelo: "JCB 3CX",
      fabricacao: "2019-07-15",
      serie: "54321",
      localizacao: "Obra C",
      historico: "Reparação de freios - 2024-06-12",
    },
    {
      nome: "Máquina 4",
      tipo: "Grua",
      modelo: "Liebherr 550 HC",
      fabricacao: "2015-11-08",
      serie: "09876",
      localizacao: "Obra D",
      historico: "Substituição de cabo - 2024-05-25",
    },
    {
      nome: "Máquina 5",
      tipo: "Trator",
      modelo: "John Deere 5050E",
      fabricacao: "2020-09-11",
      serie: "13579",
      localizacao: "Obra E",
      historico: "Manutenção do motor - 2024-08-01",
    },
    {
      nome: "Máquina 6",
      tipo: "Guindaste",
      modelo: "Grove GMK5250L",
      fabricacao: "2016-12-22",
      serie: "24680",
      localizacao: "Obra F",
      historico: "Troca de pneus - 2024-07-18",
    },
    {
      nome: "Máquina 7",
      tipo: "Escavadeira",
      modelo: "Hitachi ZX350LC",
      fabricacao: "2018-02-14",
      serie: "11223",
      localizacao: "Obra G",
      historico: "Troca de correias - 2024-06-30",
    },
    {
      nome: "Máquina 8",
      tipo: "Pá Carregadeira",
      modelo: "Komatsu WA320",
      fabricacao: "2021-04-05",
      serie: "44556",
      localizacao: "Obra H",
      historico: "Reparação hidráulica - 2024-05-15",
    },
    {
      nome: "Máquina 9",
      tipo: "Retroescavadeira",
      modelo: "CASE 580N",
      fabricacao: "2019-08-27",
      serie: "66778",
      localizacao: "Obra I",
      historico: "Substituição de bomba - 2024-04-20",
    },
    {
      nome: "Máquina 10",
      tipo: "Grua",
      modelo: "Terex RT780",
      fabricacao: "2017-11-30",
      serie: "88990",
      localizacao: "Obra J",
      historico: "Reparação elétrica - 2024-03-10",
    },
    {
      nome: "Máquina 11",
      tipo: "Trator",
      modelo: "New Holland T7",
      fabricacao: "2021-01-15",
      serie: "10101",
      localizacao: "Obra K",
      historico: "Manutenção preventiva - 2024-02-25",
    },
    {
      nome: "Máquina 12",
      tipo: "Guindaste",
      modelo: "Liebherr LTM 1200",
      fabricacao: "2018-06-07",
      serie: "20202",
      localizacao: "Obra L",
      historico: "Troca de cabos - 2024-01-12",
    },
  ];
  

const chartdata = [
  {
    name: "Máquinas Cadastradas",
    Número: 50,
  },
  {
    name: "Manutenções Pendentes",
    Número: 15,
  },
  {
    name: "Manutenções Realizadas",
    Número: 120,
  },
  {
    name: "Peças Substituídas",
    Número: 20,
  },
];

export default function GerenciamentoMaquinas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 p-6 bg-cyan-500">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">
            Gerenciamento de Máquinas
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
                Histórico de Máquinas
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
              >
                Adicionar Máquina
              </button>
              </div>
              <div className="max-h-96 overflow-x-auto">
                <Table dados={dados} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <ModalCriarMaquina
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
