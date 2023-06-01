import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    className: "",
    backgroundType: "",
    backgroundSolid: "",
    backgroundGradient: "",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
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
  },
});

export const generalActions = generalSlice.actions;

export default generalSlice;
