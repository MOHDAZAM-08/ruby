import React from 'react'
import { GiClick } from "react-icons/gi";


export default function MigrationLearn() {
  return (
    <>
       <div className='h-[70vh] w-60 flex flex-col gap-5'>
                        <div className='bg-[rgba(77,77,77,0.05)]  backdrop-blur-[8.5px] border-[rgba(255,255,255,0.09)] border h-48 rounded p-5'>
                            <div className='flex  flex-col gap-2'>
                                <div className='text-lg font-semibold'>What is LP Migration?</div>
                                <div className='text-xs text-neutral-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quis iure repudiandae repellat suscipit sit recusandae, explicabo quo facere?, unde in velit?</div>
                                <div className='text-lg  font-normal flex items-center gap-2'>Leran More <GiClick color='green' /></div>
                            </div>
                        </div>

                    </div>
    </>
  )
}
