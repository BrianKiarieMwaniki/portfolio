import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "../components/scroll/scrollSlice";


export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
  },
});
