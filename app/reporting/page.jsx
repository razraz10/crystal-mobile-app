import React from "react";
import TaskDuration from "../components/TaskDuration";
import TaskNumber from "../components/TaskNumber";
// import SaveAndCancel from "./components/SaveAndCancel";
import ChooseDate from "../components/ChooseDate";
import WelcomeToReport from "../components/WelcomeToReport";
import SaveAndCancel from "../components/SaveAndCancel";

export default function PageEditing() {
  return (
    <div className="h-screen  flex flex-col  justify-between bg-cover overflow-y-scroll "
      style={{ backgroundImage: "url('/bg_img.svg')" }}
    >
      
        <div className="px-2 mt-10">
        
        <WelcomeToReport />
        
        </div>
        <div className=" h-4/6  px-6  flex flex-col justify-around">
          <div className="mt-6">
            <TaskNumber />
          </div> 

          <div className="">
            <TaskDuration />
          </div>
          <div className="">
            <ChooseDate />
          </div>

          <div className="text-center justify-items-center">
            <SaveAndCancel />
          </div>
        </div> 
      </div>
 
  );
}