import React, { useState } from 'react'
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


function ModelSetting({ isOpen, onClose }) {
    const [isToggled, setIsToggled] = useState(false);
  
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
  
    if (!isOpen) return null;
  
    return (
      <div className='h-screen w-screen bg-black fixed top-0 left-0 bg-opacity-80 z-10'>
        <div className='flex flex-col justify-around items-start rounded-md p-5 absolute top-1/2 right-1/2 transform translate-x-[50%] translate-y-[-50%] z-10 bg-gray-800 w-96 h-80'>
          <div className='flex w-full items-center justify-between'>
            <div className='text-3xl font-semibold flex items-center justify-center gap-1'><IoSettingsOutline /> Setting</div>
            <div className='text-3xl cursor-pointer' onClick={onClose}><IoCloseSharp color='red' /></div>
          </div>
          <div className='text-xs font-thin tracking-wider'>Slippage tolerance</div>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-center rounded-md bg-slate-950 h-10 w-10'>1%</div>
            <div className='flex items-center justify-center rounded-md bg-slate-950 h-10 w-20'>2%</div>
            <div className='flex items-center justify-center rounded-md bg-slate-950 h-10 w-20'>3%</div>
            <div className='flex items-center justify-center rounded-md bg-slate-950 h-10 w-28'>4%</div>
          </div>
          <div className='text-sm font-thin tracking-wider'>Transaction decline?</div>
          <div className='flex gap-5 items-center'>
            <div className='flex items-center justify-center rounded-md bg-slate-950 h-10 w-20'>30</div>
            <div>minutes</div>
          </div>
          <div>Audio</div>
          <div>
            <button
              onClick={handleToggle}
              className={`flex items-center px-4 py-2 rounded-full transition-colors duration-300 ${isToggled ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              <span
                className="mr-2"
                style={{ transform: `translateX(${isToggled ? '35px' : '0'})` }}
              >
                {isToggled ? 'ON' : 'OFF'}
              </span>
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? 'translate-x-[-35px]' : 'translate-x-0'}`}
              />
            </button>
  
          </div>
        </div>
      </div>
    );
  }
  
  
  
  function RecentSetting({ isOpen, onClose }) {
  
    if (!isOpen) return null;
  
    return (
      <div className=' h-screen w-screen bg-black fixed top-0 left-0  bg-opacity-80 z-10 '>
        <div className='flex flex-col justify-around items-start rounded-md p-5 absolute top-1/2 right-1/2 transform translate-x-[50%] translate-y-[-50%] z-10 bg-gray-800 w-96 h-64'>
          <div className='flex w-full items-center justify-between'>
            <div className='text-3xl font-semibold flex items-center justify-center gap-1'><IoSettingsOutline /> Recent transaction</div>
            <div className='text-3xl cursor-pointer' onClick={onClose}><IoCloseSharp color='red' /></div>
          </div>
  
          <div className='text-sm font-thin tracking-wider'>Please connect your crypto wallet to view your recent transaction</div>
  
          <div>
            <button className='flex items-center px-7 py-2 rounded-lg bg-green-600'>
              Close
            </button>
          </div>
  
  
  
        </div>
      </div>
    );
  }




export default function Exchange({ }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);
    return (
        <>
         <ModelSetting isOpen={isModalOpen} onClose={closeModal} />
         <RecentSetting isOpen={isModalOpen2} onClose={closeModal2} />
         <div className='bg-[rgba(77,77,77,0.05)] backdrop-blur-[8.5px] border-[rgba(255,255,255,0.09)] border h-[76vh] w-full rounded'>

            <div className='p-10 flex flex-col  gap-5 '>
                <div className='flex items-center justify-between w-full'>
                    <div className='text-4xl font-semibold'>Exchange</div>
                    <div className='flex gap-5'>
                        <div className='cursor-pointer text-2xl' onClick={openModal}><IoSettingsOutline /></div>
                        <div className='cursor-pointer text-2xl' onClick={openModal2}><FaClockRotateLeft /></div>
                    </div>
                </div>
                <div className='text-sm font-thin'>Trede tokens in an instant</div>
            </div>

            <div className='w-full flex flex-col h-64 items-center justify-between  px-5'>

                <div className='bg-[rgba(12,12,12,0.19)]  backdrop-blur-[8.5px] border-[rgba(255,255,255,0.09)] border rounded  h-24  w-full flex flex-col justify-between p-5'>
                    <div className='text-xs'>input</div>
                    <div className='flex w-full justify-between '>
                        <div className=''>
                            <input className='no-arrows bg-transparent border-b text-xl focus:outline-none' type="number" placeholder='341788.238' />
                        </div>
                        <div>
                            <select className='bg-transparent border-none' name="" id="">
                                <option className='bg-slate-900 w-60' value="">Binance</option>
                                <option className='bg-slate-900 w-60' value="">agfads</option>
                                <option className='bg-slate-900 w-60' value="">dgasas</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='bg-[rgba(12,12,12,0.19)]   backdrop-blur-[8.5px] border-[rgba(255,255,255,0.09)] border rounded  h-24  w-full flex flex-col justify-between p-5'>
                    <div className='text-xs'>input</div>
                    <div className='flex w-full justify-between '>
                        <div className=''>
                            <input className='no-arrows bg-transparent border-b text-xl focus:outline-none' type="number" placeholder='341788.238' />
                        </div>
                        <div>
                            <select className='bg-transparent border-none' name="" id="">
                                <option className='bg-slate-900 w-60' value="">SWTH</option>
                                <option className='bg-slate-900 w-60' value="">agfads</option>
                                <option className='bg-slate-900 w-60' value="">dgasas</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='bg-green-700 h-18  hover:bg-green-800  w-full text-center p-2 rounded-full cursor-pointer'>Unlock Wallet</div>
            </div>
            <div className='text-center text-xs p-2 font-thin'>Slippage Tolerance 0.1%  </div>
            </div>
        </>
    )
}
