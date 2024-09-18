import React from "react";
import Image from "next/image";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import IconFligth from "@/public/images/ContentFlightIcon.png";
export default function ContentFlightDetails() {
  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col gap-10 ">
          {/* Flight */}
          {/* Header */}
          <div>
            <h1>Milano - Madrid</h1>
          </div>{" "}
          {/* Header */}
          {/* Flight Details */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <PlaneTakeoff size={24} />
                <p>Departure</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-2">
              <p>THY</p>
              <Image src={IconFligth} alt="icon" width={50} height={50} />
              <p>7:30 (İstanbul)</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <PlaneLanding size={24} />
                <p>Arrival</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
          </div>
          {/* Flight Details */}
          {/* Flight Price && Btn */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-2">
              <p>Price: $100</p>
              <p>Round Trip</p>
              <div>
                <button className="btn btn-primary">Check the details</button>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Book Flight</button>
            </div>
          </div>
          {/* Flight Price && Btn */}
          {/* Flight */}
        </div>
        <div className="flex flex-col gap-10 ">
          {/* Flight */}
          {/* Header */}
          <div>
            <h1>Milano - Madrid</h1>
          </div>{" "}
          {/* Header */}
          {/* Flight Details */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <PlaneTakeoff size={24} />
                <p>Departure</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-2">
              <p>THY</p>
              <Image src={IconFligth} alt="icon" width={50} height={50} />
              <p>7:30 (İstanbul)</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <PlaneLanding size={24} />
                <p>Arrival</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
          </div>
          {/* Flight Details */}
          {/* Flight Price && Btn */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-2">
              <p>Price: $100</p>
              <p>Round Trip</p>
              <div>
                <button className="btn btn-primary">Check the details</button>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Book Flight</button>
            </div>
          </div>
          {/* Flight Price && Btn */}
          {/* Flight */}
        </div>
        <div className="flex flex-col gap-10 ">
          {/* Flight */}
          {/* Header */}
          <div>
            <h1>Milano - Madrid</h1>
          </div>{" "}
          {/* Header */}
          {/* Flight Details */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <PlaneTakeoff size={24} />
                <p>Departure</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-2">
              <p>THY</p>
              <Image src={IconFligth} alt="icon" width={50} height={50} />
              <p>7:30 (İstanbul)</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <PlaneLanding size={24} />
                <p>Arrival</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
          </div>
          {/* Flight Details */}
          {/* Flight Price && Btn */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-2">
              <p>Price: $100</p>
              <p>Round Trip</p>
              <div>
                <button className="btn btn-primary">Check the details</button>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Book Flight</button>
            </div>
          </div>
          {/* Flight Price && Btn */}
          {/* Flight */}
        </div>
        <div className="flex flex-col gap-10 ">
          {/* Flight */}
          {/* Header */}
          <div>
            <h1>Milano - Madrid</h1>
          </div>{" "}
          {/* Header */}
          {/* Flight Details */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <PlaneTakeoff size={24} />
                <p>Departure</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-2">
              <p>THY</p>
              <Image src={IconFligth} alt="icon" width={50} height={50} />
              <p>7:30 (İstanbul)</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <PlaneLanding size={24} />
                <p>Arrival</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
          </div>
          {/* Flight Details */}
          {/* Flight Price && Btn */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-2">
              <p>Price: $100</p>
              <p>Round Trip</p>
              <div>
                <button className="btn btn-primary">Check the details</button>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Book Flight</button>
            </div>
          </div>
          {/* Flight Price && Btn */}
          {/* Flight */}
        </div>
        <div className="flex flex-col gap-10 ">
          {/* Flight */}
          {/* Header */}
          <div>
            <h1>Milano - Madrid</h1>
          </div>{" "}
          {/* Header */}
          {/* Flight Details */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <PlaneTakeoff size={24} />
                <p>Departure</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-2">
              <p>THY</p>
              <Image src={IconFligth} alt="icon" width={50} height={50} />
              <p>7:30 (İstanbul)</p>
            </div>
            {/* Line */}
            <span className="w-16 h-[1px] bg-gray-500"></span>
            {/* Line */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <PlaneLanding size={24} />
                <p>Arrival</p>
              </div>
              <p>7:30 AM</p>
              <p>Airport MXP</p>
            </div>
          </div>
          {/* Flight Details */}
          {/* Flight Price && Btn */}
          <div className="flex items-center justify-between gap-10">
            <div className="flex flex-col gap-2">
              <p>Price: $100</p>
              <p>Round Trip</p>
              <div>
                <button className="btn btn-primary">Check the details</button>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Book Flight</button>
            </div>
          </div>
          {/* Flight Price && Btn */}
          {/* Flight */}
        </div>
      </div>
    </>
  );
}
