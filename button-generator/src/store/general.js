import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
  name: "general",
  initialState: {
    className: "",
    backgroundType: "solid",
    backgroundSolid: "white",
    backgroundGradient: "linear-gradient(black, orange)",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
  },
  reducers: {
    changeClassName(state, action) {
      const className = action.payload;
      state.className = className;
    },
    changeBackgroundType(state, action) {
      const backgroundType = action.payload;
      state.backgroundType = backgroundType;
    },
  },
});

export const generalActions = generalSlice.actions;

export default generalSlice;
