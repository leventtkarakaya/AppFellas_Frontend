import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "@/app/redux/slice/userSlice";
import flightsSlice from "@/app/redux/slice/flightsSlice";

const rootReducer = combineReducers({
  user: userSlice,
  flights: flightsSlice,
});

export default rootReducer;
