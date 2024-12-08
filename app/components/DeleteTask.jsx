'use client'
import React from 'react'
import Image from "next/image";

export default function DeleteTask({toggleMenu}) {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center text-black' onClick={toggleMenu}>
            <div className=' fixed inset-0 blur-2xl bg-slate-400 opacity-40'></div>
            <div className='z-50 h-72 w-64 fixed text-center  bg-slate-100 justify-center rounded-md flex flex-col items-center'>
                <div className=' pb-4 pt-6 h-full flex  justify-center overflow-hidden'>
                    <Image
                        src="/bin.svg"
                        width={47}
                        height={52}
                        alt="bin image"
                    />
                </div >
                <p className='leading-none text-2xl font-semibold ' >  אתה בטוח שאתה רוצה למחוק את הדיווח?  </p>
                <div className='p-6'>
                   <p className=' leading-none text-xl font-semibold '>משימה 1000</p>
                   <p className=' leading-none text-sm text-[#9A9A9A]'>#2768274687</p>
                   <p className=' leading-none text-sm text-[#9A9A9A]'>12:30-14:30</p>
                </div>
                <div className='flex w-full h-10 text-xl border-t-2 items-center '>
                    <div className='w-1/2 text-red-500 font-semibold  border-l-2 p-1'>מחק</div>
                    <div className='w-1/2 p-1 text-[20px]  text-[#7B7B7B]'>בטל</div>
                </div>
                
            </div>
        </div>
    )
}
