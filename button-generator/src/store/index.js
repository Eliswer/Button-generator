import { configureStore } from "@reduxjs/toolkit";

import borderSlice from "./border";
import generalSlice from "./general";
import textInsideSlice from "./textInside";
import textShadowSlice from "./textShadow";

const store = configureStore({
  reducer: {
    border: borderSlice.reducer,
    textInside: textInsideSlice.reducer,
    general: generalSlice.reducer,
    textShadow: textShadowSlice.reducer,
  },
});

export default store;
