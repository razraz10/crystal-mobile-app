'use client'
import React from "react";
import TaskDuration from "../components/TaskDuration";
import EditedTitle from "../components/EditedTitle";
import TaskNumber from "../components/TaskNumber";

import ChooseDate from "../components/ChooseDate";
import SaveAndCancel from "../components/SaveAndCancel";
import WelcomeToReport from "../components/WelcomeToReport";
import { usePathname } from "next/navigation";

export default function PageEditing() {
  const pathName=usePathname()
  return (
    <div className="h-screen flex flex-col justify-between bg-cover "
      style={{ backgroundImage:"url('/bgEditing.svg')" }}>
        <div className="p-1 mt-16">
          <EditedTitle />
        </div>
        <div className=" h-4/6  px-6  flex flex-col justify-around">
          <div >
            <TaskNumber />
          </div> 
          <div >
            <TaskDuration />
          </div>
          <div >
            <ChooseDate />
          </div>
          <div className="text-center justify-items-center">
            <SaveAndCancel />
          </div>
        </div> 
      </div>
 
  );
}
