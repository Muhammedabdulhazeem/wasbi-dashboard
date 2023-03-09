import React, { useState } from 'react'
import { FiEdit, FiSearch } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FiChevronDown } from 'react-icons/fi'
import { User } from './ui/User'

const opts = ["Integrations", "User 4", "Subscription", "Profile and branding", "Notification", "Questionnaires"]

const Settings = () => {
    const [active, setActive] = useState(0)

  return (
    <section className='relative sm: pt-[16px] bg-[#f2f2f4] '>
        <div className=' p-6 font-medium text-[#818086] bg-white'>
            <div className='flex justify-between pb-5 border-b mb-5 border-[#d2d1d6]'>
                <h3 className='font-bold text-black text-[25px]'>Settings</h3>
                <div className='h-6 w-6 text-black'>
                    <FiSearch className='w-full h-full' />
                </div>
            </div>

            <div className='flex justify-between items-center mb-7'>
                <h4 className='font-bold text-black text-[18px]'>Account Setting</h4>
                <button className='bg-[#8a50fd] cursor-pointer text-[14px] font-medium text-white rounded-[4px] py-[6px] px-4 '>+ Add User</button>
            </div>

            <div className='flex sm:flex-col sm:space-x-0 space-x-9 mb-6'>
                {opts.map((opt, index) => (
                    <p
                        onClick={() => setActive(index)}
                        style={{color: active == index? "black" : "#b7b6c0"}} 
                        className='font-bold cursor-pointer text-[14px] text-[#b7b6c0] sm:hover:scale-100 hover:scale-105 report' 
                        key={opt}
                    >{opt}</p>
                ))}
            </div>

            <div className='grid sm:block sm:space-y-4 user-grid border-t border-[#d2d1d6] py-8'>
                <div>
                    <h4 className='font-bold text-black text-[16px]'>Admin User</h4>
                    <p>Admin can add and remove users and <br /> manage organizaton settings</p>
                </div>
                <div className='border border-[#d2d1d6] rounded-lg '>
                    <div className='grid set-grid sm:text-[12px] text-[#606063] rounded-t-lg bg-[#f8f8f9]  font-bold px-2 py-3 border-b border-[#d2d1d6]'>
                        <div className='flex items-center space-x-2 sm:pl-0 pl-[6px] '>
                            <div className='h-[15px] w-[15px] bg-[#f0f0f2] rounded-[4px] border border-[#747476] '></div>
                            <p>USER</p>
                            <div>
                                <FiChevronDown className='w-full h-full'/>
                            </div>
                        </div>
                        <h5 className='text-end'>DATE ADDED</h5>
                        <h5 className='text-center'>LAST ACTIVE</h5>
                        <div className=''></div>
                    </div>
                    <div>
                        <User person = {true} edit = {false} className/>
                        <User person = {true} edit = {true} className/>
                        <User person = {true} edit = {true} className/>
                    </div>
                </div>
            </div>

            <div className='grid sm:block sm:space-y-4 user-grid border-t border-[#d2d1d6] py-8'>
                <div>
                    <h4 className='font-bold text-black text-[18px]'>Account Users</h4>
                    <p>Account users can review and assess <br />risks questionnaires, Data leaks and <br /> identify breaches.</p>
                </div>
                <div className='border border-[#d2d1d6] rounded-lg '>
                    <div className='grid set-grid sm:text-[12px] text-[#606063] rounded-t-lg bg-[#f8f8f9]  font-bold px-2 py-3 border-b border-[#d2d1d6]'>
                        <div className='flex items-center space-x-2 sm:pl-0 pl-[6px] '>
                            <div className='h-[15px] w-[15px] bg-[#f0f0f2] rounded-[4px] border border-[#747476] '></div>
                            <p>USER</p>
                            <div>
                                <FiChevronDown className='w-full h-full'/>
                            </div>
                        </div>
                        <h5 className='text-end'>DATE ADDED</h5>
                        <h5 className='text-center'>LAST ACTIVE</h5>
                        <div className=''></div>
                    </div>
                    <div>
                        <User edit = {true} className/>
                        <User edit = {true} className/>
                        <User edit = {true} className/>
                    </div>
                </div>
            </div>

            <div className='grid sm:block sm:space-y-4 user-grid border-t border-[#d2d1d6] py-8'>
                <div>
                    <h4 className='font-bold text-black text-[18px]'>Account Users</h4>
                    <p>Account users can review and assess <br />risks questionnaires, Data leaks and <br /> identify breaches.</p>
                </div>
                <div className='border border-[#d2d1d6] rounded-lg '>
                    <div className='grid sm:text-[12px] set-grid text-[#606063] rounded-t-lg bg-[#f8f8f9]  font-bold px-2 py-3 border-b border-[#d2d1d6]'>
                        <div className='flex items-center space-x-2 sm:pl-0 pl-[6px] '>
                            <div className='h-[15px] w-[15px] bg-[#f0f0f2] rounded-[4px] border border-[#747476] '></div>
                            <p>USER</p>
                            <div>
                                <FiChevronDown className='w-full h-full'/>
                            </div>
                        </div>
                        <h5 className='text-end'>DATE ADDED</h5>
                        <h5 className='text-center'>LAST ACTIVE</h5>
                        <div className=''></div>
                    </div>
                    <div>
                        <User edit = {true} className/>
                        <User edit = {true} className/>
                        <User edit = {true} className/>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Settings