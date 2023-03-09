import React, { useState } from 'react'
import { menuOptions } from '../data'
import { Option } from './ui/Option'
import { SwitchBtn } from './ui/Switch'
import { RiHome4Line } from 'react-icons/ri'
import { AiOutlineFileText } from 'react-icons/ai'


const Sidebar = ({setShowNav, showNav}) => {
  const [selected, SetSelected] = useState(1)

  return (
    <section  
      className={
        showNav?  'sm:text-[14px] z-20 fixed top-0 transition-all translate-x-0 left-0 w-[20%] sm:w-[45%] bg-[#f2f2f4] h-screen' : 
                  'sm:text-[14px] z-20 fixed top-0 left-0 w-[20%] -translate-x-[200%] bg-[#f2f2f4] h-screen'
      }
    >
        <div onClick={() => setShowNav(false)} className='hidden sm:flex space-x-[7px] p-2'>
          <div className='w-[12px] h-[12px] rounded-[50%] bg-white '></div>
          <div className='w-[12px] h-[12px] rounded-[50%] bg-white '></div>
          <div className='w-[12px] h-[12px] rounded-[50%] bg-white '></div>
        </div>
        <div className='sm:hidden flex space-x-[7px] p-2'>
          <div className='w-[12px] h-[12px] rounded-[50%] bg-white '></div>
          <div className='w-[12px] h-[12px] rounded-[50%] bg-white '></div>
          <div className='w-[12px] h-[12px] rounded-[50%] bg-white '></div>
        </div>
        <div className=' font-bold sm:px-2 px-6 sm:text-[14px] text-[16px] text-[#929296] mt-[15px] '>
            <div className='flex items-center mb-[50px] sm:mb-[40px] '>
                <div className='relative flex items-center'>
                    <div className='sm:relative left-[-6px] sm:h-[30px] sm:mr-0 sm:w-[40px] h-[40px] w-[50px] mr-3 '>
                      <img className='w-full h-full' src="/assets/wasbi-logo.png" alt="wasbi" />
                    </div>
                    <h3 className='font-bold sm:text-[19px] text-black text-[25px]'>Wabsi</h3>
                </div>
                <SwitchBtn className="ml-auto"/>
            </div>

            <div onClick={() => SetSelected(1)} className='mb-[15px]'>
              <Option name="Home" className={selected === 1? "text-black" : ""} icon={<RiHome4Line className='w-full h-full' />} arrow={false} />
            </div>

            <div onClick={() => SetSelected(2)} className='flex items-center mb-[15px] '>
              <div className='flex space-x-3'>
                <div className='sm:h-5 sm:w-5 h-6 w-6'>
                  <AiOutlineFileText className='w-full h-full'/>
                </div>
                <p className='cursor-pointer report hover:scale-110 hover:text-black' style={{color: selected === 2? "black" : "#818086"}}>Reports</p>
              </div>
              <div className='h-3 w-3 sm:h-2 sm:w-2 ml-auto rounded-[50%] bg-[#8a50fd]'></div>
            </div>

            <div className='border-t  border-[#929296] pt-[10px] mb-[15px] '>
              <Option name="ORGANIZATION" icon={false} arrow={true} />
            </div>

            <div className='space-y-[15px]'>
              {menuOptions.map(opt => (
                <div onClick={() => SetSelected(opt.name)} key={opt.name}>
                  <Option className={selected == opt.name? "text-black" : ""}  name={opt.name} icon={opt.icon} arrow={opt.arrow} />
                </div>
              ))}
            </div>

            <div className='border-y border-[#929296] sm:py-[10px] sm:mt-4 sm:mb-2 py-[17px] mt-7 mb-5'>
              <Option name="VENDORS" icon={false} arrow={true} />
            </div>

            <div className=''>
              <Option name="MANAGED SERVICES" icon={false} arrow={true} />
            </div>


        </div>
    </section>
  )
}

export default Sidebar