import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { RxPerson } from 'react-icons/rx'
import { useState } from 'react'

export const User = ({person = false, edit = true, selected, className}) => {
    const [ticked, setTicked] = useState(false)

    if(selected) setTicked(true)

    return (
        <div className={`grid set-grid sm:text-[13px] items-center border-b border-[#d2d1d6] p-2 ${className}`}>
            <div className='flex items-center sm:pl-0 pl-[6px]'>
                <div 
                    className='h-[15px] w-[15px] mr-[8px] rounded-[4px] border border-[#747476] '
                    style={{backgroundColor: ticked? "#8a50fd" : "#f0f0f2"}}
                    onClick={() => setTicked(!ticked)}
                ></div>
                {!person && (<div className='sm:hidden flex justify-center items-center h-[35px] w-[35px] mr-[8px] rounded-[50%]  bg-[#d6d6da] '>
                    <RxPerson />
                </div>)}
                {person &&  (<div className='sm:hidden flex justify-center items-center h-[35px] w-[35px] mr-[8px] rounded-[50%] '>
                    <img className='w-full h-full' src="/assets/wasbi-prf.png" alt="" />
                </div>)}
                <div>
                    <p className='text-black sm:text-[13px]'>Cameron Williamson</p>
                    <p className='text-[14px] sm:text-[10px] '>helloworld.test@coding.com</p>
                </div>
            </div>
            <h5 className='text-end'>16 FEB 2023</h5>
            <h5 className='shrink-0 text-center'>19 MARCH 2023</h5>
            {edit && (<div className='flex ml-auto space-x-[7px]'>
                <FiEdit />
                <RiDeleteBin7Line />
            </div>)}
        </div>
    )
}