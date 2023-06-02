import { createSlice } from "@reduxjs/toolkit";

const textShadowSlice = createSlice({
  name: "textShadow",
  initialState: {
    colour: "",
    horizontal: "",
    vertical: "",
    blur: "",
  },
  reducers: {
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
  },
});

export const textShadowActions = textShadowSlice.actions;

export default textShadowSlice;
