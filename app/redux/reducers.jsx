import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "@/app/redux/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});

export default rootReducer;
