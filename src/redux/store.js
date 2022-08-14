import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./states/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
