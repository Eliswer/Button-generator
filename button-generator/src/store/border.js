import { createSlice } from "@reduxjs/toolkit";

const borderSlice = createSlice({
  name: "border",
  initialState: {
    type: "",
    colour: "",
    width: "1px",
    radius: "4px",
  },
  reducers: {
    changeType(state, action) {
      const newBorderType = action.payload;
      state.type = newBorderType;
    },
  },
});

export const borderActions = borderSlice.actions;

export default borderSlice;
