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
    changeDisplayedText(state, action) {},
    changeFont(state, action) {
      const newText = action.payload;
      state.displayedText = newText;
    },
    changeSize(state, action) {},
    changeWeight(state, action) {},
    changeColour(state, action) {},
  },
});

export const borderActions = borderSlice.actions;

export default borderSlice;
