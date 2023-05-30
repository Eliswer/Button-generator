import { configureStore } from "@reduxjs/toolkit";

import borderSlice from "./border";

const store = configureStore({
  reducer: {
    border: borderSlice.reducer,
  },
});

export default store;
