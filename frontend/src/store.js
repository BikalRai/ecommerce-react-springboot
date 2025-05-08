import { combineReducers, createStore } from "redux";
import userReducer from "./features/users/userSlice";

// const rootReducers = combineReducers(userReducer);

const store = createStore(userReducer);

export default store;
