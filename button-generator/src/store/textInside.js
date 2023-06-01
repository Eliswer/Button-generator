import { createSlice } from "@reduxjs/toolkit";

const textInsideSlice = createSlice({
  name: "textInside",
  initialState: {
    displayedText: "",
    font: "",
    size: "",
    weight: "",
    colour: "",
  },
  reducers: {
    changeDisplayedText(state, action) {
      const newText = action.payload;
      state.displayedText = newText;
    },
    changeFont(state, action) {
      const newFont = action.payload;
      state.font = newFont;
    },
    changeSize(state, action) {
      const newSize = action.payload;
      state.size = newSize;
    },
    changeWeight(state, action) {
      const newWeight = action.payload;
      state.weight = newWeight;
    },
    changeColour(state, action) {
      const newColour = action.payload;
      state.colour = newColour;
    },
  },
});

export const textInsideActions = textInsideSlice.actions;

export default textInsideSlice;
