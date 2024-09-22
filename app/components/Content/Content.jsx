import React from "react";
import FlightSchedule from "./ContentFlightSchedule";
import FlightDetails from "./ContentFlightDetails";
import FlightCheckBox from "./ContentCheckbox";
import Sidebar from "./ContentSidebar";
export default function Content() {
  return (
    <>
      <div>
        <div className="flex w-full">
          {/* Content 1 */}
          <div>
            <FlightSchedule />
            {/* Flights start */}
            <div className="flex">
              <div>
                <FlightDetails />
              </div>
              <div>
                <FlightCheckBox />
              </div>
            </div>
            {/* Flights end */}
          </div>
          {/* Content 2 */}
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
