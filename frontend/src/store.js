import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/users/authSlice";
import filterReducer from "./features/filter/filterSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;
