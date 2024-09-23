"use client";
import React, { useRef } from "react";
import Image from "next/image";
import PlaneTakeOff from "@/public/images/PlaneTakeOff.png";
import PlaneLanding from "@/public/images/PlaneLanding.png";
import IconFligth from "@/public/images/airplane.png";
import moment from "moment";
import { useSelector } from "react-redux";
export default function ContentFlightDetails() {
  /* Redux State */
  const flights = useSelector((state) => state.flights.flightsData);
  /* Redux State gelen state javascript ile array olarak döndürülüyor */
  const flightList = Array.isArray(flights) ? flights : [];
  return (
    <>
      <div className="my-20 lg:ml-16 lg:w-full">
        {/* Flights List Map */}
        {flightList.length > 0 ? (
          flights?.map((item, index) => {
            return (
              <div className="flex flex-col gap-10 mt-10" key={index}>
                {/* Flight */} {/* Header */}
                <div className="max-sm:flex max-sm:items-center max-sm:justify-center ">
                  <h1 className="text-xl font-bold">{`${
                    item?.city ? item?.city : "Istanbul"
                  } - ${item?.country ? item?.country : "Turkey"}`}</h1>
                </div>{" "}
                {/* Header */} {/* Flight Details */}
                <div className="flex items-center justify-between gap-10 max-sm:flex max-sm:flex-col ">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <Image
                        src={PlaneTakeOff}
                        alt="plane"
                        width={25}
                        height={25}
                      />
                      <p>Departure</p>
                    </div>
                    <p className="text-lg font-bold">
                      {`${moment(
                        item?.scheduleDateTime || "2024-09-24T09:00:00"
                      ).format("hh:mm ")} - ${moment(
                        item?.scheduleDateTime || "2024-09-24T09:00:00"
                      ).format("A")}`}
                    </p>
                    <p>Airport:{`${item?.prefixIATA || "MXP"}`}</p>
                  </div>
                  {/* Line */}
                  <span className="w-16 h-[1px] bg-gray-500"></span>
                  {/* Line */}
                  <div className="flex flex-col gap-3">
                    <p>{`${item?.mainFlight || "TK 123"}`}</p>
                    <Image
                      src={IconFligth}
                      alt="icon"
                      width={25}
                      height={25}
                      className="ml-3"
                    />
                    <p className="text-lg font-medium xl:-ml-10">
                      {`${moment(item?.actualLandingTime).format(
                        "hh:mm "
                      )} (Nonstop)`}
                    </p>
                  </div>
                  {/* Line */}
                  <span className="w-16 h-[1px] bg-gray-500"></span>
                  {/* Line */}
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-2">
                      <Image
                        src={PlaneLanding}
                        alt="plane"
                        width={25}
                        height={25}
                      />
                      <p>Arrival</p>
                    </div>
                    <p className="text-lg font-bold">
                      {`${moment(
                        item?.estimatedLandingTime || "2024-09-24T09:00:00"
                      ).format("hh:mm ")} - ${moment(
                        item?.estimatedLandingTime || "2024-09-24T09:00:00"
                      ).format("A")}`}
                    </p>
                    <p>Airport:{`${item?.prefixIATA || "MXP"}`}</p>
                  </div>
                </div>
                {/* Flight Details */} {/* Flight Price && Btn */}
                <div className="flex items-center justify-between gap-10 max-sm:ml-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold text-[#4a03a0]">
                      Price: $100
                    </p>
                    <p>Round Trip</p>
                    <div>
                      <button className="btn bg-[#f5f5f5] underline  text-[#4a03a0] cursor-pointer">
                        Check the details
                      </button>
                    </div>
                  </div>
                  <button className="bg-[#4a03a0] text-white px-10 py-7 rounded-tl-xl rounded-br-xl text-center cursor-pointer">
                    <p>Book Flight</p>
                  </button>
                </div>
                {/* Flight Price && Btn */} {/* Flight */}
              </div>
            );
          })
        ) : (
          <div className="my-20 lg:ml-60 lg:w-full">
            <p> Uçak Listesi için arama yapın</p>
          </div>
        )}
      </div>
    </>
  );
}
