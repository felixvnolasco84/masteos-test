"use client";

import React from "react";
import CustomCalendar from "./CustomCalendar";

export const CalendarComponent = () => {
  return (
    <div className="lg:min-h-none flex min-h-[600px] flex-col gap-4 lg:max-h-[472px] lg:justify-between xl:max-h-[660px]">
      <div className="flex items-center justify-center bg-[#EFEFEF] py-4 text-center lg:h-1/6">
        <h3>Revisa disponibilidad</h3>
      </div>
      <div className="lg:h-4/6">
        <CustomCalendar />
      </div>
      <div className="flex items-center justify-around bg-[#EFEFEF] py-4">
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-[#A6E0DA]"></div>
          <span className="text-sm lg:text-base">La Galería</span>
        </div>

        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-[#EBC3A4]"></div>
          <span className="text-sm lg:text-base">Macarella</span>
        </div>

        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-[#7EB2FC]"></div>
          <span className="text-sm lg:text-base">Pepita</span>
        </div>
      </div>
    </div>
  );
};
