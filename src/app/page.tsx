import Image from "next/image";
import { AiFillEnvironment } from "react-icons/ai";
import { FaTools, FaUserAlt } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <aside className="w-64 p-6 bg-gray-400/60">
          <Image src={"/image/LOGO_T4.png"} alt="Logo" width={240} height={240} className="w-full"/>
          <nav className="flex flex-col space-y-4 mt-6 text-2xl gap-6">
            <a href="" className="flex items-center gap-4 hover:font-semibold ">
              <MdDashboard />
              Dashboard
            </a>
            <a href="" className="flex items-center gap-4 hover:font-semibold ">
              <AiFillEnvironment />
              Ambientes</a>
            <a href="" className="flex items-center gap-4 hover:font-semibold ">
              <FaTools />
              Equipamentos</a>
            <a href="" className="flex items-center gap-4 hover:font-semibold ">
              <GrVmMaintenance />
              Manutenções</a>
            <a href="" className="flex items-center gap-4 hover:font-semibold ">
              <FaUserAlt />
              Usuários</a>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-500">
          <h1 className="text-4xl font-bold uppercase w-full p-6 text-center">Sistema de Gestão de Manutenção</h1>

          <div>
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="bg-red-500 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold">200</strong>
                <span className="font-semibold">Ambientes</span>
                </div>
                <AiFillEnvironment size={24} className="ml-4"/>
              </div>

              <div className="bg-green-500 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold">200</strong>
                <span className="font-semibold">Ambientes</span>
                </div>
                <AiFillEnvironment size={24} className="ml-4"/>
              </div>

              <div className="bg-blue-500 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold">200</strong>
                <span className="font-semibold">Ambientes</span>
                </div>
                <AiFillEnvironment size={24} className="ml-4"/>
              </div>

              <div className="bg-yellow-500 p-6 flex gap-2 rounded-xl">
                <div className="flex-1 flex flex-col">
                <strong className="text-3xl font-bold">200</strong>
                <span className="font-semibold">Ambientes</span>
                </div>
                <AiFillEnvironment size={24} className="ml-4"/>
              </div>
            </div>
          </div>

        </main>
      </div>
      <footer className="p-4 bg-white text-center text-red-400 text-xl">Todos os direitos reservados &copy; 2024</footer>
    </div>
  );
}
