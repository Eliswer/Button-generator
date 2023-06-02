import { createSlice } from "@reduxjs/toolkit";

const boxShadowSlice = createSlice({
  name: "boxShadow",
  initialState: {
    type: "",
    colour: "",
    horizontal: "",
    vertical: "",
    blur: "",
    spread: "",
  },
  reducers: {
    changeType(state, action) {
      const newType = action.payload;
      state.type = newType;
    },
    changeColour(state, action) {
      const newColour = action.payload;
      state.colour = newColour;
    },
    changeHorizontal(state, action) {
      const newHorizontal = action.payload;
      state.horizontal = newHorizontal;
    },
    changeVertical(state, action) {
      const newVertical = action.payload;
      state.vertical = newVertical;
    },
    changeBlur(state, action) {
      const newBlur = action.payload;
      state.blur = newBlur;
    },
    changeSpread(state, action) {
      const newSpread = action.payload;
      state.spread = newSpread;
    },
  },
});

export const boxShadowActions = boxShadowSlice.actions;

export default boxShadowSlice;
