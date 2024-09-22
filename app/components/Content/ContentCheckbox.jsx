import React from "react";

export default function ContentCheckbox() {
  return (
    <>
      <div className="sticky top-0 lg:ml-60 lg:w-full max-md:hidden">
        <div className="p-10 mt-10">
          <p className="mb-6">Sort By:</p>
          <select className="w-full max-w-xs border-none outline-none select select-bordered">
            <option disabled value={"Lowest Price"}>
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
                className=" checked:radio-primary radio"
              />
              <p>5:00 AM - 11:00 AM</p>
            </label>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:radio-primary radio"
              />
              <p>5:00 AM - 11:00 AM</p>
            </label>
          </div>
          {/* Arrival Time */}
          {/* Stops Status */}
          <div className="flex flex-col gap-5 my-10">
            <p>Stops</p>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:radio-primary radio"
              />
              <p>Nonstop</p>
            </label>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:radio-primary radio"
              />
              <p>1 Stop</p>
            </label>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:radio-primary radio"
              />
              <p>2+ Stops</p>
            </label>
          </div>
          {/* Stops Status */}
          {/* Airline Included */}
          <div className="flex flex-col gap-5 my-10">
            <p>Airline Included</p>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:radio-primary radio"
              />
              <p>Istanbul Air</p>
            </label>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:radio-primary radio"
              />
              <p>Sabiha Gökcen</p>
            </label>
            <label className="flex items-center gap-5">
              <input
                type="radio"
                name="radio-1"
                className=" checked:radio-primary radio"
              />
              <p>Turkish Airlines</p>
            </label>
          </div>
          {/* Airline Included */}
        </div>
      </div>
    </>
  );
}
