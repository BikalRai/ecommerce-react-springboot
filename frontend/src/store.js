import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/users/authSlice";
import filterReducer from "./features/filter/filterSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
  },
});

export default store;
