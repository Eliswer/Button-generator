import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    className: "",
    backgroundType: "",
    backgroundColourSolid: "",
    backgroundColourGradient: "",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
    width: "",
    height: "",
  },
  reducers: {
    changeClassName(state, action) {
      const newClassName = action.payload;
      state.className = newClassName;
    },
    changeBackgroundType(state, action) {
      const newBackgroundType = action.payload;
      state.backgroundType = newBackgroundType;
    },
    changeBgColourSolid(state, action) {
      const newSolidColour = action.payload;
      state.backgroundColourSolid = newSolidColour;
    },
    changeBgColourGradient(state, action) {
      const newGradientColour = action.payload;
      state.backgroundColourGradient = newGradientColour;
    },
    changePaddingTop(state, action) {
      const newPaddingTop = action.payload;
      state.paddingTop = newPaddingTop;
    },
    changePaddingBottom(state, action) {
      const newPaddingBottom = action.payload;
      state.paddingBottom = newPaddingBottom;
    },
    changePaddingLeft(state, action) {
      const newPaddingLeft = action.payload;
      state.paddingLeft = newPaddingLeft;
    },
    changePaddingRight(state, action) {
      const newPaddingRight = action.payload;
      state.paddingRight = newPaddingRight;
    },
    changeWidth(state, action) {
      const newWidth = action.payload;
      state.width = newWidth;
    },
    changeHeight(state, action) {
      const newHight = action.payload;
      state.height = newHight;
    },
  },
});

export const generalActions = generalSlice.actions;

export default generalSlice;
