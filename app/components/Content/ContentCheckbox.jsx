import React from "react";

export default function ContentCheckbox() {
  return (
    <>
      <div className="sticky top-0 lg:ml-60 lg:w-full max-md:hidden">
        <div className="p-10 mt-10">
          <p className="mb-6 font-sans font-bold">Sort By:</p>
          <select className="w-full max-w-md border-none outline-none select select-bordered">
            <option disabled selected>
              Lowest Price
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          {/* Arrival Time */}
          <div className="flex flex-col gap-5 my-10">
            <p>Arrival Time</p>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
              />
              <p>5:00 AM - 11:00 AM</p>
            </label>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
              />
              <p>5:00 AM - 11:00 AM</p>
            </label>
          </div>
          {/* Arrival Time */}
          {/* Stops Status */}
          <div className="flex flex-col justify-between w-full gap-5 my-10">
            <p>Stops</p>
            <label className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio-2"
                  className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
                />
                <p>Nonstop</p>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="">$250</p>
              </div>
            </label>
            <label className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio-2"
                  className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
                />
                <p>1 Stop</p>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="">$250</p>
              </div>
            </label>
            <label className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio-2"
                  className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
                />
                <p>2+ Stops</p>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="">$250</p>
              </div>
            </label>
          </div>
          {/* Stops Status */}
          {/* Airline Included */}
          <div className="flex flex-col justify-between w-full gap-5 my-10 ">
            <p>Airline Included</p>
            <label className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio-3"
                  className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
                />
                <p>İstanbul Airport</p>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="">$250</p>
              </div>
            </label>
            <label className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio-3"
                  className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
                />
                <p>Saniha Gökçen Airport</p>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="">$250</p>
              </div>
            </label>
            <label className="flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="radio-3"
                  className=" checked:bg-[#4a03a0] border-[#4a03a0] radio"
                />
                <p>Azerbeycan Airport</p>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="">$250</p>
              </div>
            </label>
          </div>
          {/* Airline Included */}
        </div>
      </div>
    </>
  );
}
