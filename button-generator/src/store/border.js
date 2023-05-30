import { createSlice } from "@reduxjs/toolkit";

const borderSlice = createSlice({
  name: "border",
  initialState: {
    type: "solid",
    colour: "orange",
    width: "1px",
    radius: "4px",
  },
  reducers: {
    changeType(state) {
      state.type = "none";
    },
  },
});

export const borderActions = borderSlice.actions;

export default borderSlice;
