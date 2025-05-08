const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/registerRequest":
      return { ...state, isLoading: true };
    case "user/registerSuccess":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "user/loginRequest":
      return { ...state, isLoading: true };
    case "user/loginSuccess":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "user/loginFailure":
      return { ...state, isLoading: false, error: true };
    case "clearError":
      return { ...state, error: false };
    default:
      return state;
  }
}

// action creators
export function registerRequest() {
  return { type: "user/registerRequest" };
}

export function registerSuccess(user) {
  return { type: "user/registerSuccess", payload: user };
}

export function registerFailure() {
  return { type: "user/registerFailure" };
}

export function loginRequest() {
  return { type: "user/loginRequest" };
}

export function loginSuccess(user) {
  return { type: "user/loginSuccess", payload: user };
}

export function loginFailure() {
  return { type: "user/loginFailure" };
}

export function clearError() {
  return { type: "clearError" };
}
