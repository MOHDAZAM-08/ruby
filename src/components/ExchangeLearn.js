import React from 'react'
import { GiClick } from "react-icons/gi";

export default function ExchangeLearn() {
    return (
        <>
            <div className='h-[70vh] w-56 flex flex-col gap-5 z[-6]'>
                <div className='bg-[rgba(77,77,77,0.05)] backdrop-blur-[8.5px] border-[rgba(255,255,255,0.09)] border h-72 rounded p-7'>
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

                <div className='bg-[rgba(77,77,77,0.05)] backdrop-blur-[8.5px] border-[rgba(255,255,255,0.09)] border h-48 rounded p-5'>
                    <div className='flex  flex-col gap-2'>
                        <div className='text-lg font-semibold'>Trade</div>
                        <div className='text-xs text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis iure repudiandae repellat suscipit sit recusandae, explicabo quo facere?, unde in velit?</div>
                        <div className='text-lg  font-normal flex items-center gap-1'>Leran More <GiClick color='green' /></div>
                    </div>
                </div>

            </div>
        </>
    )
}
