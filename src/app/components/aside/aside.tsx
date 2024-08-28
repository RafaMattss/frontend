import Image from "next/image";
import { AiFillEnvironment } from "react-icons/ai";
import { FaTools, FaUserAlt } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "./navlink";

export function Aside (){

    return(

        <>
        <aside className="w-64 p-6 bg-cyan-600 h-auto ">
          <Image src={"/image/LOGO_T4.png"} alt="Logo" width={240} height={240} className="w-full"/>
          <nav className="flex flex-col space-y-4 mt-6 text-2xl gap-6">
            <NavLink />
          </nav>
        </aside>
        </>

    )

}