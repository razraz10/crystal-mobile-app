
"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Day from "../components/Day";
// import Binik from './component/Binik'
// import Day from "./component/Day";
import Report from "../components/Report";
import Link from "next/link";
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  let newYear = selectedDate.getFullYear();
  const today = new Date();
  const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = new Date(year, month, day);
const dayOfWeek = date.getDay()-1;
  const [messinDay, setMessinDay] = useState({
    day,month,year,dayOfWeek
  });
console.log(messinDay);
  // Function to get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  // Function to generate array of days in month
  const generateDaysArray = () => {
    const daysInMonth = getDaysInMonth(
      selectedDate.getFullYear(),
      selectedDate.getMonth()
    );
    const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth());
    const dayOfWeek = date.getDay();
    console.log(dayOfWeek);
    const firstDayEmptySlots = Array.from({ length: dayOfWeek }, () => null);
    const daysArray = [
      ...firstDayEmptySlots,
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];

    return daysArray;
  };
  const btnMinus = () => {
    const currentMonthIndex = monthInHebrew.indexOf(
      selectedDate.toLocaleString("default", { month: "long" })
    );
    // console.log(currentMonthIndex);
    let newMonthIndex =
      (currentMonthIndex - 1 + monthInHebrew.length) % monthInHebrew.length;
    // console.log(newYear);
    // console.log(newMonthIndex);
    // console.log("kt");

    if (currentMonthIndex === 0) {
      newYear--;
      // console.log(newYear);
      // console.log("kt");
    }

    setSelectedDate(
      (prevDate) => new Date(prevDate.setFullYear(newYear, newMonthIndex))
    );
  };

  const btnPlus = () => {
    const currentMonthIndex = monthInHebrew.indexOf(
      selectedDate.toLocaleString("default", { month: "long" })
    );
    let newMonthIndex = (currentMonthIndex + 1) % monthInHebrew.length;
    if (currentMonthIndex === 11) {
      newYear++;
    }

    setSelectedDate(
      (prevDate) => new Date(prevDate.setFullYear(newYear, newMonthIndex))
    );
  };

  const daysArray = generateDaysArray();
  console.log(daysArray);
  const daysInHebrew = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
  ];
  
  const monthInHebrew = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  return (
    <div className="text-white w-screen h-screen flex flex-col justify-between bg-gradient-to-tl from-[#6190E8] to-[#002A78]">
      <div className="px-5 overflow-y-hidden ">
        <p className="text-white text-opacity-65 pt-5 flex  justify-center items-center">
          {selectedDate.getFullYear()}
        </p>
        <div className="flex justify-center items-center text-xl">
          <button onClick={btnMinus} className="m-1">
            <ChevronRight />
          </button>
          <div className="min-w-20 text-center">
            {selectedDate.toLocaleString("default", { month: "long" })}
          </div>
          <button onClick={btnPlus} className="m-1">
            <ChevronLeft />
          </button>
        </div>
        <ul className=" grid grid-cols-7 gap-3">
          {daysInHebrew.map((day) => (
            <li
              className=" text-white text-opacity-60 flex justify-center items-center"
              key={day}
            >
              {day}
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-7  justify-center items-center w-full  text-center">
          {daysArray.map((day, index) => (
            <Day
              key={day !== null ? day : null-`${index}`}
              day={day}
              month={selectedDate.getMonth()}
              year={selectedDate.getFullYear()}
              messinDay={messinDay}
              setMessinDay={setMessinDay}
              className=""
            />
          ))}
        </ul>
      </div>
      {/* <Binik/> */}
      {/* <div className="h-[50vh] overflow-y-auto">
      <Report/>
      </div> */}
      <div className="flex flex-col z-10 ">
        <div className=" max-h-[80vh]  overflow-y-auto">
          
          <Report messinDay={messinDay}/>
        </div>
        <div className="bg-white h-[10vh] ">
          <div
            className={
              "m-2 p-[2px] w-36 h-8   flex items-center justify-center mx-auto rounded-lg  bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 "
            }
          > 
            <button className=" bg-white h-full w-full rounded-md">
            <Link href={'/update'}>
              <span className="text-blue-900 leading-3 tracking-tighter text-xl flex items-center justify-center">
                דיווח חדש + 
              </span>
              </Link>
            </button> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;




// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import Day from "../components/day";
// // import Report from "./component/Report";
// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   let newYear = selectedDate.getFullYear();

//   // Function to get days in month
//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };
//   // Function to generate array of days in month
//   const generateDaysArray = () => {
//     const daysInMonth = getDaysInMonth(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth()
//     );
//     const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth());
//     const dayOfWeek = date.getDay();
//     console.log(dayOfWeek);
//     const firstDayEmptySlots = Array.from({ length: dayOfWeek }, () => null);
//     const daysArray = [
//       ...firstDayEmptySlots,
//       ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//     ];

//     return daysArray;
//   };
//   const btnMinus = () => {
//     const currentMonthIndex = monthInHebrew.indexOf(
//       selectedDate.toLocaleString("default", { month: "long" })
//     );
//     console.log(currentMonthIndex);
//     let newMonthIndex =
//       (currentMonthIndex - 1 + monthInHebrew.length) % monthInHebrew.length;
//     console.log(newYear);
//     console.log(newMonthIndex);
//     console.log("kt");

//     if (currentMonthIndex === 0) {
//       newYear--;
//       console.log(newYear);
//       console.log("kt");
//     }

//     setSelectedDate(
//       (prevDate) => new Date(prevDate.setFullYear(newYear, newMonthIndex))
//     );
//   };

//   const btnPlus = () => {
//     const currentMonthIndex = monthInHebrew.indexOf(
//       selectedDate.toLocaleString("default", { month: "long" })
//     );
//     let newMonthIndex = (currentMonthIndex + 1) % monthInHebrew.length;
//     if (currentMonthIndex === 11) {
//       newYear++;
//     }

//     setSelectedDate(
//       (prevDate) => new Date(prevDate.setFullYear(newYear, newMonthIndex))
//     );
//   };

//   const daysArray = generateDaysArray();
//   console.log(daysArray);
//   const daysInHebrew = [
//     "ראשון",
//     "שני",
//     "שלישי",
//     "רביעי",
//     "חמישי",
//     "שישי",
//     "שבת",
//   ];
//   const monthInHebrew = [
//     "ינואר",
//     "פברואר",
//     "מרץ",
//     "אפריל",
//     "מאי",
//     "יוני",
//     "יולי",
//     "אוגוסט",
//     "ספטמבר",
//     "אוקטובר",
//     "נובמבר",
//     "דצמבר",
//   ];
//   return (
//     <div className="text-white  h-screen w-screen flex flex-col justify-between bg-gradient-to-b from-[#002A78] to-[#6190E8]">
//       <div className="px-5">
//         <p className="text-white text-opacity-65 pt-5 flex  justify-center items-center">
//           {selectedDate.getFullYear()}
//         </p>
//         <div className="flex justify-center items-center text-xl">
//           <button onClick={btnMinus} className="m-1">
//             <ChevronRight />
//           </button>
//           <div className="min-w-20 text-center">
//             {selectedDate.toLocaleString("default", { month: "long" })}
//           </div>
//           <button onClick={btnPlus} className="m-1">
//             <ChevronLeft />
//           </button>
//         </div>
//         <ul className=" grid grid-cols-7 gap-3">
//           {daysInHebrew.map((day) => (
//             <li
//               className=" text-white text-opacity-60 flex justify-center items-center"
//               key={day}
//             >
//               {day}
//             </li>
//           ))}
//         </ul>
//         <ul className="grid grid-cols-7  justify-center items-center w-full  text-center">
//           {daysArray.map((day, index) => (
//             <Day
//               key={day !== null ? day : null - `${index}`}
//               day={day}
//               month={selectedDate.getMonth()}
//               year={selectedDate.getFullYear()}
//               className=""
//             />
//           ))}
//         </ul>
//       </div>
//       {/* <Report/> */}
//     </div>
//   );
// };

// export default Calendar;