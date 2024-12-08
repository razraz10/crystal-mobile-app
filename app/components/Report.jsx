"use client"
import axios from 'axios'
import { Delete } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DeleteTask from './DeleteTask'
export default function Report({messinDay}) {
  let { day, month, year,dayOfWeek } = messinDay;
  const today = new Date();
  let startDate= new Date(`${year}-${month}-${day}`)
  const diffDays = Math.floor((today-startDate)/(1000*60*60*24))
  let timeing="היום"
 
  if(diffDays>0){
     timeing=` לפני ${diffDays} ימים`
  }
  else if(diffDays===0){
    timeing="היום"
  }
  else{
    timeing="אין דיווחים"
  }
  const [isOpen, setOpen] = useState(false); 
  const [missions, setMissions] = useState([]);
  const [showAllMissions, setShowAllMissions] = useState(false);
  const [visibleMissionCount, setVisibleMissionCount] = useState(5);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const daysInHebrew = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
  ];
   dayOfWeek=daysInHebrew[dayOfWeek]
//   console.log(day);
//   console.log(month);
//   console.log(year);
//   console.log(יום בשבוע ${dayOfWeek});
console.log(`יום ${dayOfWeek}`)
console.log(`תאריך: ${day}/${month}/${year}`)
    // const day = 1
    // const month = 1
    // const year = 2024
    // const dayOfWeek = 'sunday'
    const mission = 1000
    const missionId = 999
    const from = '10:00'
    const to = '11:30'
   

    const getRandomImage = () => {
      const images = ['/strongBoardMission.svg', '/weakBoardMission.svg', '/lightBoardMission.svg'];
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    };
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setMissions(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
// let a="[h-50vh]"
    const handleShowMore = () => {
        if (showAllMissions) {
            // a="h-[50vh]"
          setVisibleMissionCount(4);
        } else {
            // a="h-[400vh]"
          setVisibleMissionCount(missions.length);
        }
        setShowAllMissions(!showAllMissions);
      };
    return (<>
     {isOpen && <DeleteTask toggleMenu={toggleMenu}/>}
      <div className='bg-white rounded-t-[30px]'> 
      
      <div className='bottom-0 w-full '>
        {/* <div onClick={handleShowMore} className={` bg-white  ${showAllMissions? 'h-[90vh]': 'h-[40vh]'} flex flex-col justify-center     mt-3 top-96 rounded-t-[30px]`}> */}
        <div className={` flex flex-col justify-center  `}>
            {/* CURRENT DAY */}
            <div onClick={handleShowMore}  className='flex justify-between px-4 '>
                <div className='bg-[#83a0d9] py-1 px-3 my-5 font-open-sens font-bold rounded'>{timeing}</div>
                <div className='font-open-sens text-[#9A9A9A] my-5'> יום {dayOfWeek} {day}/{month}/{year}</div>
            </div>

            <div className='mx-4'>
                {/* {Array.isArray(missions) ? ( */}

                {missions.slice(0, visibleMissionCount).map((myMission, index) => {                    // if (!showAllMissions && index >= 4) {
                    //     return null
                    // }
                    return <div key={myMission.id}>
                        {/* MISSION TEMPLATE */}
                        <div className='w-[368] h-10  py-6 flex justify-between items-center border-b-2  border-[#8B8B8B] border-opacity-20' >
                            <div className='flex'>
                                <div className='w-9 h-9 mt-0.5 left-80'> <Image src={getRandomImage()} width='50' height='50' alt='strongBoardMission' /> </div>
                                <div className=''>
                                    <div className='w-24 h-5 top-1 left-52 font-open-sens font-semibold text-sm leading-5 -tracking-tight items-center text-[#000000]'>{myMission.price} משימה </div>
                                    <div className='w-20 h-4 top-7 left-60 font-open-sens font-light text-xs leading-4 tracking-tight items-center text-[#9A9A9A]'>{from}-{to}</div>
                                </div>


                            </div>
                            <div className='flex items-center' >
                                <div className='w-10 h-4 top-5 left-[88px] font-open-sens text-[#9A9A9A] font-normal size-4 leading-4 tracking-tighter items-center'>{myMission.id}#111</div>
                                <div className='w-9 h-8 top-1 left-12' onClick={toggleMenu}>
                                  <Image src={'/trash.svg'} width='50' height='50' alt='trash' /> </div>
                                <Link href={'/update'}>  <div className='w-9 h-8 top-1 left-4'>
                                  <Image src={'/add.svg'} width='50' height='50' alt='add' /></div></Link>
                            </div>
                        </div>
                        {/* <div className=' w-[338.3] mb-2 mx-1 border border-[#8B8B8B] border-opacity-20'></div> */}
                    </div>
                })}

              
            </div>
    
        </div>
        </div>
        </div>
        </>
    )
}