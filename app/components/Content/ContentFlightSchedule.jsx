"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Airplane from "@/public/images/airplane.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PlaneTakeOff from "@/public/images/PlaneTakeOff.png";
import PlaneLanding from "@/public/images/PlaneLanding.png";
import Calender from "@/public/images/Calender.png";
import { setFlights } from "@/app/redux/slice/flightsSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import moment from "moment";
export default function FlightSchedule() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const handleOnFlights = async ({ startDate, endDate }) => {
    debugger;
    startDate = startDate;
    endDate = endDate;
    console.log("🚀 ~ handleOnFlights ~ startDate:", startDate);
    console.log("🚀 ~ handleOnFlights ~ endDate:", endDate);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/flight/getFlight`,
        {
          startDate,
          endDate,
        }
      );
      console.log("🚀 ~ handleOnFlights ~ response:", response.data);
      dispatch(setFlights(response.data));
    } catch (error) {
      console.log("🚀 ~ handleOnFlights ~ error:", error);
    }
  };
  return (
    <>
      <div className="flex lg:ml-10 xl:w-full ">
        <div className="flex flex-col max-sm:w-full max-sm:ml-5">
          {/* Flights  && Icons */}
          <div className="flex items-center justify-between p-5 max-sm:flex max-sm:flex-col max-sm:gap-y-2 max-sm:p-0 ">
            <div className="flex items-center gap-2">
              <Image src={Airplane} alt="airplane" width={40} height={40} />
              <h1 className="text-2xl font-semibold uppercase">
                Book your Flight
              </h1>
            </div>
            <div className="flex">
              <button className="rounded-none rounded-tl-full rounded-bl-full btn bg-[#4a03a0] text-white hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#4a03a0]">
                Round Trip
              </button>
              <button className="rounded-none rounded-tr-full rounded-br-full btn bg-[#4a03a0] text-white hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-[#4a03a0]">
                One Way
              </button>
            </div>
          </div>
          {/* Flights  && Icons */}
          {/* Flights */}
          <div className="flex items-center gap-10 p-5 max-sm:flex max-sm:flex-col max-sm:mt-10 max-sm:p-0 ">
            {/* Places  */}
            <div className="flex gap-2">
              <label className="flex items-center gap-2 rounded-none rounded-tl-full rounded-bl-full outline-none input input-bordered">
                <Image
                  src={PlaneTakeOff}
                  alt="planeTakeOff"
                  width={24}
                  height={24}
                />
                <input
                  type="text"
                  className="grow max-lg:w-28"
                  placeholder="Departure Place"
                />
              </label>
              <label className="flex items-center gap-2 rounded-none rounded-tr-full rounded-br-full outline-none input input-bordered ">
                <Image
                  src={PlaneLanding}
                  alt="planeLanding"
                  width={24}
                  height={24}
                />
                <input
                  type="text"
                  className="grow max-lg:w-28 "
                  placeholder="Destination"
                />
              </label>
            </div>
            {/* Dates */}
            <div className="flex gap-2">
              <label className="flex items-center rounded-none rounded-tl-full rounded-bl-full outline-none input-bordered input">
                <Image src={Calender} alt="calender" width={24} height={24} />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="border-none rounded-none rounded-tl-full rounded-bl-full outline-none max-lg:w-28 input"
                />
              </label>
              <label className="flex items-center rounded-none rounded-tr-full rounded-br-full outline-none input-bordered input">
                <Image src={Calender} alt="calender" width={24} height={24} />
                <DatePicker
                  selected={endDate}
                  className="border-none rounded-none rounded-tr-full rounded-br-full outline-none max-lg:w-28 input"
                  onChange={(date) => setEndDate(date)}
                />
              </label>
            </div>
          </div>
          {/* Flights */}
          {/* submit */}
          <div>
            <button
              className="btn bg-[#4a03a0] text-white lg:ml-8 lg:mt-5 max-sm:mt-5 max-sm:ml-28"
              onClick={() => handleOnFlights({ startDate, endDate })}
            >
              Show Flights
            </button>
          </div>
          {/* submit */}
        </div>
      </div>
    </>
  );
}
