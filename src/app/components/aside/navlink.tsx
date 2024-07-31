import { AiFillEnvironment } from "react-icons/ai"
import { FaTools, FaUserAlt } from "react-icons/fa"
import { GrVmMaintenance } from "react-icons/gr"
import { MdDashboard } from "react-icons/md"


export function NavLink(){

    const links = [
        {
            target: "#",
            text: "Dashboard",
            icon: <MdDashboard />
        },
        {
            target: "#",
            text: "Ambientes",
            icon: <AiFillEnvironment />
        },
        {
            target: "#",
            text: "Equipamentos",
            icon: <FaTools />
        },
        {
            target: "#",
            text: "Manutenções",
            icon: <GrVmMaintenance />
        },
        {
            target: "#",
            text: "Usuários",
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