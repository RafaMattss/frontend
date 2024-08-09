import { AiFillEnvironment } from "react-icons/ai";
import { Footer } from "./components/footer";
import { Aside } from "./components/aside/aside";
import { Card } from "./components/page/card";
import Table from "./components/table/table";
import { BarChart } from "@tremor/react";

const cards = [
  {
      color: "bg-red-500", qty: "23", text: "Ambientes", icon: <AiFillEnvironment size={24} className="ml-4"/>
  },
  {
      color: "bg-blue-500", qty: "31", text: "Urgentes", icon: <AiFillEnvironment size={24} className="ml-4"/>
  },
  {
      color: "bg-green-500", qty: "12", text: "Manutenções", icon: <AiFillEnvironment size={24} className="ml-4"/>
  },
  {
      color: "bg-yellow-500", qty: "8", text: "Equipamentos", icon: <AiFillEnvironment size={24} className="ml-4"/>
  },
]

const dados = [
  { ambiente: 'Sala 1', equipamento: 'Projetor', solicitacao: 12, atendimento: 8 },
  { ambiente: 'Sala 2', equipamento: 'Computador', solicitacao: 5, atendimento: 5 },
  { ambiente: 'Sala 3', equipamento: 'Impressora', solicitacao: 7, atendimento: 7 },
  { ambiente: 'Sala 4', equipamento: 'Scanner', solicitacao: 2, atendimento: 2 },
  { ambiente: 'Sala 5', equipamento: 'Câmera', solicitacao: 10, atendimento: 6 },
  { ambiente: 'Sala 6', equipamento: 'Microfone', solicitacao: 3, atendimento: 3 },
  { ambiente: 'Sala 7', equipamento: 'Projetor', solicitacao: 15, atendimento: 10 },
  { ambiente: 'Sala 8', equipamento: 'Computador', solicitacao: 8, atendimento: 8 },
  { ambiente: 'Sala 9', equipamento: 'Impressora', solicitacao: 4, atendimento: 4 },
  { ambiente: 'Sala 10', equipamento: 'Scanner', solicitacao: 1, atendimento: 1 },
  { ambiente: 'Sala 11', equipamento: 'Câmera', solicitacao: 6, atendimento: 5 },
  { ambiente: 'Sala 12', equipamento: 'Microfone', solicitacao: 2, atendimento: 2 },
  { ambiente: 'Sala 13', equipamento: 'Projetor', solicitacao: 11, atendimento: 9 },
  { ambiente: 'Sala 14', equipamento: 'Computador', solicitacao: 3, atendimento: 3 },
  { ambiente: 'Sala 15', equipamento: 'Impressora', solicitacao: 5, atendimento: 5 },
  { ambiente: 'Sala 16', equipamento: 'Scanner', solicitacao: 7, atendimento: 6 },
  { ambiente: 'Sala 17', equipamento: 'Câmera', solicitacao: 9, atendimento: 8 },
  { ambiente: 'Sala 18', equipamento: 'Microfone', solicitacao: 4, atendimento: 3 },
  { ambiente: 'Sala 19', equipamento: 'Projetor', solicitacao: 13, atendimento: 11 },
  { ambiente: 'Sala 20', equipamento: 'Computador', solicitacao: 2, atendimento: 2 },
  { ambiente: 'Sala 21', equipamento: 'Impressora', solicitacao: 6, atendimento: 5 },
  { ambiente: 'Sala 22', equipamento: 'Scanner', solicitacao: 1, atendimento: 1 },
  { ambiente: 'Sala 23', equipamento: 'Câmera', solicitacao: 8, atendimento: 7 },
  { ambiente: 'Sala 24', equipamento: 'Microfone', solicitacao: 3, atendimento: 3 },
  { ambiente: 'Sala 25', equipamento: 'Projetor', solicitacao: 14, atendimento: 12 },
  { ambiente: 'Sala 26', equipamento: 'Computador', solicitacao: 5, atendimento: 5 },
  { ambiente: 'Sala 27', equipamento: 'Impressora', solicitacao: 7, atendimento: 6 },
  { ambiente: 'Sala 28', equipamento: 'Scanner', solicitacao: 2, atendimento: 2 },
  { ambiente: 'Sala 29', equipamento: 'Câmera', solicitacao: 10, atendimento: 9 },
  { ambiente: 'Sala 30', equipamento: 'Microfone', solicitacao: 4, atendimento: 4 },
]

const chartdata = [
  {
    name: 'Ambientes',
    'Número de chamados': 23,
  },
  {
    name: 'Urgentes',
    'Número de chamados': 31,
  },
  {
    name: 'Manutenções',
    'Número de chamados': 12,
  },
  {
    name: 'Equipamentos',
    'Número de chamados': 8,
  },
];



export default function Home() {


  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
      <Aside />
        <main className="flex-1 p-6 bg-cyan-500">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">Sistema de Gestão de Manutenção</h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">

              {cards.map((props) =>(
                <Card color={props.color}
                      qty={props.qty}
                      text={props.text}
                      icon={props.icon} />
              ))} 

              </div>
          </div>
          <div className="container mx-auto p-10 gap-10 bg-cyan-700 rounded-lg flex">
            <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4 text-center">Histórico de Chamados</h1>
            <div className="max-h-96 overflow-x-auto">
              <Table dados={dados} />
            </div>
            </div>
            <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Número de chamados por Tipo
                  </h3>
                  <BarChart
                    className="mt-6 font-bold text-white max-w-screen-md"
                    data={chartdata}
                    index="name"
                    categories={['Número de chamados']}
                    colors={['red']}
                    yAxisWidth={24}
                  />
              </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
