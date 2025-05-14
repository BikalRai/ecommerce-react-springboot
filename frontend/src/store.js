import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./features/users/userSlice";

// const rootReducers = combineReducers(userReducer);

// const store = createStore(rootReducers, applyMiddleware(thunk));

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
