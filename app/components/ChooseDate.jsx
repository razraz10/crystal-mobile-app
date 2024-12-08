'use client'
import { useState } from "react";
import Image from "next/image";

export default function ChooseDate(){
    const [date, setdate] = useState(new Date())


    const options = { weekday: "long", year: "numeric", month: "2-digit", day: "2-digit" };
    const hebrewDate = date.toLocaleDateString("he-IL", options).replace(",", "").replace(/\./g, "/")

    const handleNextDay = ()=> {
        const nextDay = new Date(date)
        nextDay.setDate(date.getDate() + 1)
        setdate(nextDay)
    }

    const handlePrevDay = () => {
        const prevDate = new Date(date)
        prevDate.setDate(date.getDate() - 1)
        setdate(prevDate)
    }


    return(
        <div>
            <span className="text-2xl text-white font-bold ">תאריך:</span>
            <div className="py-1 bg-[#D7E3F8] border-[#235DCA] border rounded-md flex justify-between items-center mt-1 ">
            <button onClick={handlePrevDay} className="h-full w-6 pr-2"><Image src={'/change_date.svg'} alt="change_date" width={10} height={18}/></button>
            <span className="bg-[#D7E3F8] text-[#235DCA] text-sm font-normal">היום, {hebrewDate}</span>
            <button onClick={handleNextDay} className="h-full w-6 pr-1.5"><Image className="rotate-180" src={'/change_date.svg'} alt="change_date" width={10} height={18}/></button>
            </div>
       </div>
    )
}