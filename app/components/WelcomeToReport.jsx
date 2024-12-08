import Image from "next/image";
import React from "react";

export default function WelcomeToReport() {
  const day = "יום שלישי";
  const date = "08/08/2023";
  const time = "בוקר";
  const firstName = "ישראל";

  return (
      <div className="gap-2 h-full p-2">
        <div className="flex flex-col">
          <div className="text-[#002A78] leading-8 ">{`${day} ${date}`}</div>
          <div className=" text-3xl font-semibold leading-8">{`${time} טוב 👋`}
          <div className=" text-xl font-normal leading-8">{`${firstName} `}</div></div>
          <div
            className="
            pt-2
            pb-2
          text-[#002A78]
           text-4xl
            font-bold
            leading-8
            "
          >
            דיווח משימה
          </div>
        </div>
      </div>
  );
}
