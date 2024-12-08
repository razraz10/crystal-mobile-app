import React from "react";
import Image from "next/image";

export default function TaskNumber() {
  const options = ["1000", "1001", "1002", "1003"];

  return (
   
      

    <div className=" ">
      <label className="text-white font-bold text-2xl leading-7">
        מספר משימה:
      </label>
        <div className="w-full  border-[1.2px] border-[#002A78]  flex rounded-md relative bg-[#D3E0F7]">
           
          <select className="rounded-md w-full appearance-none  inline-block bg-[#D3E0F7]  text-[#002A78] text-sm p-1">
            <option disabled selected>
              בחר את מס' המשימה הרלוונטי
            </option >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option> 
            
              
            ))}   
             
           </select>
           <div className=" pointer-events-none absolute inset-y-0 left-0 text-center flex items-center px-4 text-gray-700  border-r-[1.2px] border-[#002A78]"> 
            <Image 
            src={"/arrow.svg"} alt="arrow" width={22} height={100} />
</div>
           
          </div>
           

        
        </div>
    
  );
}
