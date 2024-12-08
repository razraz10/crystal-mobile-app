'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SaveAndCancel() {
  const pathName = usePathname()
  console.log(pathName)
 

  return (
    <div>
        <button className='bg-[#002A78] text-lg font-bold text-white px-6 py-1 rounded-md'>{pathName ==='/update' ?"שמור שינויים":"שמור"}</button>
        <button className='bg-white text-lg text-[#002A78] px-3 py-1 rounded-md mx-1'>בטל</button>
    </div>
  )
}
