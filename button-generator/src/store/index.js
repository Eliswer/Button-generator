import { configureStore } from "@reduxjs/toolkit";

import borderSlice from "./border";
import generalSlice from "./general";
import textInsideSlice from "./general";

const store = configureStore({
  reducer: {
    border: borderSlice.reducer,
    textInside: textInsideSlice.reducer,
    general: generalSlice.reducer,
  },
});

export default store;
