import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isLoading: false,
  token: localStorage.getItem("authToken") || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequest(state) {
      state.isLoading = true;
    },
    register(state, action) {
      state.user = action.payload;
      state.isLoading = false;
    },
    login(state, action) {
      state.user = action.payload;
      state.isLoading = false;
    },
    setError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isLoading = false;
      state.error = null;
      localStorage.removeItem("authToken");
    },
  },
});

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case "user/request":
//       return { ...state, isLoading: true };
//     case "user/register":
//       return {
//         ...state,
//         isLoading: false,
//         isAuthenticated: true,
//         user: action.payload,
//         error: null,
//       };

//     case "user/login":
//       return {
//         ...state,
//         isLoading: false,
//         user: action.payload.user,
//         token: action.payload.token,
//         error: null,
//       };

//     case "clearError":
//       return { ...state, error: false };
//     default:
//       return state;
//   }
// }

export const { setError, authRequest, logout } = authSlice.actions;

// action creators
export function register(user) {
  return async (dispatch) => {
    dispatch(authRequest());
    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", {
        email: user.email,
        password: user.password,
      });
      dispatch({ type: "user/register", payload: user });
      console.log(res.data);
      return { success: true };
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Registration Failed";
      dispatch(setError(message));
    }
  };
}

export function login(userDetails) {
  return async (dispatch) => {
    dispatch(authRequest());
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email: userDetails.email,
        password: userDetails.password,
      });
      if (res.data) {
        const token = res.data.token;
        localStorage.setItem("authToken", token);
        dispatch({
          type: "auth/login",
          payload: userDetails,
        });
      }
      console.log(res.data.token);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || "Login Failed";
      dispatch(setError(message));
    }
  };
}

export default authSlice.reducer;
