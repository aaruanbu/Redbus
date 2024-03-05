import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import Redbus from "./Bus.json";

export const Slicess = createSlice({
  name: "redbus",
  initialState: {
    Ars: Redbus.Arrays,
    dub: Redbus.Arrays,
    ticketbooking: false,
    login: false,
    passengers: false,
  },
  reducers: {
    updates: (state, action) => {
      state.Ars = action.payload;
    },
    dublicate: (state, action) => {
      state.dub = action.payload;
    },
    booktrue: (state, action) => {
      state.ticketbooking = action.payload;
    },
    passengerinfo: (state, action) => {
      state.passengers = action.payload;
    },
  },
});
export default Slicess.reducer;
export const { updates, dublicate, booktrue, passengerinfo } = Slicess.actions;
