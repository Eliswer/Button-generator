import { createSlice } from "@reduxjs/toolkit";

const borderSlice = createSlice({
  name: "border",
  initialState: {
    type: "",
    colour: "",
    width: "",
    radius: "",
  },
  reducers: {
    changeType(state, action) {
      const newBorderType = action.payload;
      state.type = newBorderType;
    },
    changeColour(state, action) {
      const newColour = action.payload;
      state.colour = newColour;
    },
    changeWidth(state, action) {
      const newWidth = action.payload;
      state.width = newWidth;
    },
    changeRadius(state, action) {
      const newRadius = action.payload;
      state.radius = newRadius;
    },
  },
});

export const borderActions = borderSlice.actions;

export default borderSlice;
