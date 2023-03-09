import { useState } from "react"

export const SwitchBtn = ({selected, className}) => {
    const [swtch, setSwtch] = useState(selected)
    return (
        <div 
            style={{justifyContent: swtch? "end" : "start", backgroundColor: swtch? "#8a50fd" : "#b7b6c0"}} 
            className={`relative flex w-[46px] h-[20px] sm:h-[15px] sm:w-[26px] transition-all rounded-[40px] p-1 pt-0.05 cursor-pointer ${className}`}
            onClick={() => setSwtch(!swtch)}
        >
            <div className={`relative bg-white w-[15px] sm:h-[10px] sm:w-[10px] transition-all h-[15px] rounded-[50%] bottom-[2px]`}></div>
        </div>
    )
}