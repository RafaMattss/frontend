import { AiFillEnvironment } from "react-icons/ai"
import { FaTools, FaUserAlt } from "react-icons/fa"
import { GrVmMaintenance } from "react-icons/gr"
import { MdDashboard } from "react-icons/md"


export function NavLink(){

    const links = [
        {
            target: "/dashboard",
            text: "Dashboard",
            icon: <MdDashboard />
        },
        {
            target: "/machines",
            text: "Maquinas",
            icon: <AiFillEnvironment />
        },
        {
            target: "/parts",
            text: "Peças",
            icon: <FaTools />
        },
        {
            target: "/maintanence",
            text: "Manutenções",
            icon: <GrVmMaintenance />
        },
        {
            target: "/teams",
            text: "Equipes",
            icon: <FaUserAlt />
        },
    ]
    
    return(

        <>
        {links.map((obj) => (
            <a href={obj.target} className="flex items-center gap-4 hover:font-semibold ">
              {obj.icon}
              {obj.text}
            </a>
            ))}
        </>

    )

}