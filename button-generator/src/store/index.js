import { configureStore } from "@reduxjs/toolkit";

import borderSlice from "./border";
import generalSlice from "./general";

const store = configureStore({
  reducer: {
    border: borderSlice.reducer,
    general: generalSlice.reducer,
  },
});

export default store;
