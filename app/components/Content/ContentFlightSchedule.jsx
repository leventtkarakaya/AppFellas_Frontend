"use client";
import { useState } from "react";
import Image from "next/image";
import Airplane from "@/public/images/airplane.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Calendar } from "lucide-react";
export default function FlightSchedule() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div className="flex w-3/4 ">
        <div className="flex flex-col">
          {/* Flights  && Icons */}
          <div className="flex items-center justify-between p-5">
            <Image src={Airplane} alt="airplane" width={40} height={40} />
            <div className="flex ">
              <button className="rounded-none rounded-tl-full rounded-bl-full btn btn-primary hover:border-white">
                Round Trip
              </button>
              <button className="rounded-none rounded-tr-full rounded-br-full btn btn-primary hover:border-white">
                One Way
              </button>
            </div>
          </div>
          {/* Flights  && Icons */}
          {/* Flights */}
          <div className="flex items-center gap-10 p-5">
            {/* Places  */}
            <div className="flex gap-2">
              <label className="flex items-center gap-2 border-none rounded-none rounded-tl-full rounded-bl-full outline-none input">
                <PlaneTakeoff size={24} />
                <input
                  type="text"
                  className=" grow"
                  placeholder="Departure Place"
                />
              </label>
              <label className="flex items-center gap-2 border-none rounded-none rounded-tr-full rounded-br-full outline-none input ">
                <PlaneLanding size={24} />
                <input type="text" className="grow" placeholder="Destination" />
              </label>
            </div>
            {/* Dates */}
            <div className="flex gap-2">
              <label className="flex items-center border-none rounded-none rounded-tl-full rounded-bl-full outline-none input">
                <Calendar size={24} />
                <DatePicker
                  selected={startDate}
                  className="border-none rounded-none rounded-tl-full rounded-bl-full outline-none input"
                  onChange={(date) => setStartDate(date)}
                />
              </label>
              <label className="flex items-center border-none rounded-none rounded-tr-full rounded-br-full outline-none input">
                <Calendar size={24} />
                <DatePicker
                  selected={endDate}
                  className="border-none rounded-none rounded-tr-full rounded-br-full outline-none input"
                  onChange={(date) => setEndDate(date)}
                />
              </label>
            </div>
          </div>
          {/* Flights */}
          {/* submit */}
          <div>
            <button className="btn btn-primary">Show Flights</button>
          </div>
          {/* submit */}
        </div>
      </div>
    </>
  );
}
