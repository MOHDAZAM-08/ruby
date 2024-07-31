import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Exchange from './Exchange';
import Liqudity from './Liqudity';




function Main() {
  const [activeComponent, setActiveComponent] = useState('exchange');

  const handleClick = (component) => {
    setActiveComponent(component);
  };


  return (
    <>
     
      <div className='flex items-start justify-around p-8 rounded  '>

        <div className='z-[0] h-[60vh] w-64 rounded-[10px] p-5 flex flex-col justify-evenly items-start bg-[rgba(77,77,77,0.05)] shadow-custom-dual backdrop-blur-[8.5px] border border-[rgba(255,255,255,0.09)]'>
          <div className='flex  flex-col gap-2'>
            <div className='text-lg font-semibold'>Trade</div>
            <div className='text-xs text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis iure repudiandae repellat suscipit sit recusandae, explicabo quo facere?, unde in velit?</div>
            <div className='text-lg font-semibold'>Leran More</div>
          </div>
          <div className='p-2 flex flex-col text-sm font-thin justify-evenly items-start gap-2'>

          <div className={`flex items-center justify-between h-10 w-[180px] px-4 rounded cursor-pointer ${activeComponent === 'exchange' ? 'border-l-8 border-blue-500 bg-gray-700' : 'hover:border-l-8 hover:border-blue-500 hover:bg-gray-700'}`} onClick={() => handleClick('exchange')}> Exchange <IoIosArrowRoundForward /></div>

          <div className={`flex items-center justify-between h-10 w-[180px] px-4 rounded cursor-pointer ${activeComponent === 'liquidity' ? 'border-l-8 border-blue-500 bg-gray-700' : 'hover:border-l-8 hover:border-blue-500 hover:bg-gray-700'}`} onClick={() => handleClick('liquidity')}>
            Liquidity <IoIosArrowRoundForward />
          </div>
            <div className='flex items-center justify-between h-10 w-[180px] px-4  hover:border-l-8 rounded cursor-pointer hover:bg-gray-700 '>LP Migration <IoIosArrowRoundForward /></div>

            <div className='flex items-center justify-between h-10 w-[180px] px-4  hover:border-l-8 rounded cursor-pointer hover:bg-gray-700 '>V1 Liqudity(old) <IoIosArrowRoundForward /></div>
          </div>
        </div>

        <div className='bg-[rgba(77,77,77,0.05)] border-[rgba(255,255,255,0.09)] border h-[76vh] w-[40vw] rounded'>

        {activeComponent === 'exchange' && <Exchange />}
        {activeComponent === 'liquidity' && <Liqudity />}
        </div>

        <div className='h-[70vh] w-56 flex flex-col gap-5'>

          <div className='bg-[rgba(77,77,77,0.05)] border-[rgba(255,255,255,0.09)] border h-72 rounded p-7'>
            <div className='flex  flex-col gap-2'>
              <div className='text-lg font-semibold'>Trade</div>
              <div className='text-xs text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis iure repudiandae repellat suscipit sit recusandae, explicabo quo facere?, unde in velit?</div>
              <div className='px-2 flex flex-col gap-2 mt-3'>
                <div className='flex items-center justify-between text-xs font-semibold'>
                  Swap <input type="checkbox" />
                </div>
                <div className='flex items-center justify-between text-xs font-semibold'>
                  Liquidity <input type="checkbox" />
                </div>
                <div className='flex items-center justify-between text-xs font-semibold'>
                  Bridge <input type="checkbox" />
                </div>
              </div>

            </div>
          </div>

          <div className='bg-[rgba(77,77,77,0.05)] border-[rgba(255,255,255,0.09)] border h-48 rounded p-5'>
            <div className='flex  flex-col gap-2'>
              <div className='text-lg font-semibold'>Trade</div>
              <div className='text-xs text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis iure repudiandae repellat suscipit sit recusandae, explicabo quo facere?, unde in velit?</div>
              <div className='text-lg font-semibold'>Leran More</div>
            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Main
