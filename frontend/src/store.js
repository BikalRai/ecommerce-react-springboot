import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/users/authSlice";
import paginationReducer from "./components/pagination/paginationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    pagination: paginationReducer,
  },
});

export default store;
