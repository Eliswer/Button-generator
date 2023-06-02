import { configureStore } from "@reduxjs/toolkit";

import borderSlice from "./border";
import generalSlice from "./general";
import textInsideSlice from "./textInside";
import textShadowSlice from "./textShadow";
import boxShadowSlice from "./boxShadow";

const store = configureStore({
  reducer: {
    border: borderSlice.reducer,
    textInside: textInsideSlice.reducer,
    general: generalSlice.reducer,
    textShadow: textShadowSlice.reducer,
    boxShadow: boxShadowSlice.reducer,
  },
});

export default store;
