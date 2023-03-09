import { RiBarChart2Line, RiHome4Line } from 'react-icons/ri'
import { CgDropOpacity, CgProfile } from 'react-icons/cg'
import { HiCodeBracket } from 'react-icons/hi2'
import { RxLightningBolt } from 'react-icons/rx'
import { BsFlag, BsShieldCheck, BsShieldExclamation } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export const menuOptions = [
    {
        icon: <RiBarChart2Line className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Overview",
        arrow: true
    },
    {
        icon: <BsShieldCheck className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Risk Profile",
        arrow: true
    },
    {
        icon: <BsFlag className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Recommendation",
        arrow: true
    },
    {
        icon: <CgDropOpacity className="w-full h-full sm:h-5 sm:w-5"/>,
        name: "Domains",
        arrow: false
    },
    {
        icon: <BsShieldExclamation className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Vulnerabilities",
        arrow: false
    },
    {
        icon: <CgProfile className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Identity branches",
        arrow: false
    },
    {
        icon: <HiCodeBracket className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Data leaks",
        arrow: false
    },
    {
        icon: <RxLightningBolt className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Security profile",
        arrow: false
    },
    {
        icon: <FiSettings className="w-full h-full sm:h-5 sm:w-5" />,
        name: "Settings",
        arrow: false
    }
]