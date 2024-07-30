import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <div className='w-full min-h-20 border-b p-5 items-center flex justify-evenly'>
                <div className='whitespace-nowrap px-1 lg:px-10 md:px-10 font-semibold text-xl'>Ruby Swap</div>
                <div className='flex text-sm text-neutral-400 items-center justify-evenly gap-8 hidden md:flex'>
                    <div className='cursor-pointer hover:text-white '>Home</div>
                    <div className='cursor-pointer hover:text-white '>Trade</div>
                    <div className='cursor-pointer hover:text-white '>Farms</div>
                    <div className='cursor-pointer hover:text-white '>Pools</div>
                    <div className='cursor-pointer hover:text-white '>Prediction</div>
                    <div className='cursor-pointer hover:text-white '>Collectibles</div>
                    <div className='cursor-pointer hover:text-white '>More</div>
                </div>
                <div className={`hidebar border w-64 fixed top-0 pb-10 right-0 bg-custom-rgba shadow-custom backdrop-blur-custom border-custom-rgba rounded-[5px] transition-transform transform ${sidebarVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='cursor-pointer p-4' onClick={toggleSidebar}><IoClose /></div>
                    <div className='flex flex-col items-center justify-evenly '>
                        <div className='w-[150px] text-center p-2 cursor-pointer rounded-lg hover:bg-gray-300 hover:text-black'>Home</div>
                        <div className='w-[150px] text-center p-2 cursor-pointer rounded-lg hover:bg-gray-300 hover:text-black'>Trade</div>
                        <div className='w-[150px] text-center p-2 cursor-pointer rounded-lg hover:bg-gray-300 hover:text-black'>Farms</div>
                        <div className='w-[150px] text-center p-2 cursor-pointer rounded-lg hover:bg-gray-300 hover:text-black'>Pools</div>
                        <div className='w-[150px] text-center p-2 cursor-pointer rounded-lg hover:bg-gray-300 hover:text-black'>Prediction</div>
                        <div className='w-[150px] text-center p-2 cursor-pointer rounded-lg hover:bg-gray-300 hover:text-black'>Collectibles</div>
                        <div className='w-[150px] text-center p-2 cursor-pointer rounded-lg hover:bg-gray-300 hover:text-black'>More</div>
                    </div>
                </div>

                <div className='flex gap-5 text-md  px-1 lg:px-10 md:px-10  text-center'>
                    <div className='bg-violet-600 px-3 py-1 rounded-md hover:bg-violet-900 '>Button</div>
                    <div className='flex items-center justify-center text-2xl'><FaRegCircleUser /></div>
                </div>
                <div className='md:hidden flex items-center justify-center cursor-pointer' onClick={toggleSidebar}>
                    <FaBars style={{ scale: "1.8px" }} />
                </div>
            </div>
        </>
    );
}
