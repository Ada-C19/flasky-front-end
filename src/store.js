import { configureStore } from "@reduxjs/toolkit";

import catReducer from "./redux/cat-slice";

export const store = configureStore({
  reducer: {
    cats: catReducer,
  },
});
