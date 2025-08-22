import { configureStore } from "@reduxjs/toolkit";
import reactProblemsReducer from "./reactProblemsSlice";

const appStore = configureStore({
  reducer: {
    reactissues: reactProblemsReducer,
  },
});

export default appStore;
