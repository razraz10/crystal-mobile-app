import Link from 'next/link'
import React from 'react'

export default function Menu({toggleMenu}) {
  return (
    <div className=' fixed inset-0  z-50 ' >
   <div className='fixed  inset-0   bg-[#000000]/20 backdrop-blur-[2px] ' onClick={toggleMenu} > </div>
      <div className='
      z-60
      // w-52
      h-32
      px-1
      border-2
    border-[#000000]/20
      grid grid-rows-3 
     divide-y-2 divide-[#000000]/20
      bg-gradient-to-r from-[#ffffff]/90  to-[#ffffff]/70
      rounded-lg
      absolute right-7 top-6 
      text-sm
      font-semibold
      shadow-[0px_0px_10px_0px_#FFFFFF80]
      '>
        <Link href={'/reporting'}className='flex items-center'>
        <div className='w-full ' onClick={toggleMenu}  ><p className='p-1 w-full hover:bg-[#3781E1]   hover:rounded hover:text-slate-50'> דיווח על משימה</p></div>
        </Link>
        <Link href={'/date'}className='flex items-center'>
        <div className='w-full ' onClick={toggleMenu} ><p className='p-1 w-full hover:bg-[#3781E1]  hover:rounded hover:text-slate-50'>דו"ח דיווחים + עריכת דיווחים</p></div>
       </Link>
        <div className='flex items-center' onClick={toggleMenu}><p className='p-1 w-full hover:bg-[#3781E1]  hover:rounded hover:text-slate-50'>התנתק</p></div>
      </div>
  
    </div>
  )
}
