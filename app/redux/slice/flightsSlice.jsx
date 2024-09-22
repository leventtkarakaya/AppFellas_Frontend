import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: null,
  airlines: null,
  destentions: null,
  flightsData: {
    flights: null,
    destinations: null,
  },
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFlights: (state, action) => {
      state.flights = action.payload;
      state.flightsData = [
        ...state.flights.data,
        ...state.flights.destinations,
      ];
    },
    setAirlines: (state, action) => {
      state.airlines = action.payload;
    },
    setDestentions: (state, action) => {
      state.destentions = action.payload;
    },
  },
});

export const { setFlights, setAirlines, setDestentions } = flightsSlice.actions;

export default flightsSlice.reducer;
