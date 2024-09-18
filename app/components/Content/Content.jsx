import React from "react";
import FlightSchedule from "./ContentFlightSchedule";
import FlightDetails from "./ContentFlightDetails";
import FlightCheckBox from "./ContentCheckbox";
import Sidebar from "./ContentSidebar";
export default function Content() {
  return (
    <>
      <div className="p-8">
        <div className="flex w-full ">
          {/* Content 1 */}
          <div className="w-3/4 ">
            <FlightSchedule />
            {/* Flights start */}
            <div className="flex w-full ">
              <div className="w-2/3">
                <FlightDetails />
              </div>
              <div className="w-1/3">
                <FlightCheckBox />
              </div>
            </div>
            {/* Flights end */}
          </div>
          {/* Content 2 */}
          <div className="w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
