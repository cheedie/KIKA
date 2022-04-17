import {
  REGISTER_USER,
  USER_DETAILS,
  REQUEST_LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  CHANGE_PASSWORD,
  USER_LOGOUT,
} from "../actions";

const user_reducer = (state, action) => {
  if (action.type === REGISTER_USER) {
    return { ...state, register_user: action.payload };
  }
  if (action.type === REQUEST_LOGIN) {
    return { ...state, loading: true };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      loading: false,
    };
  }

  if (action.type === LOGIN_ERROR) {
    return { ...state, loading: false };
  }
  if (action.type === CHANGE_PASSWORD) {
    return { ...state, newPassword: action.payload };
  }
  if (action.type === USER_LOGOUT) {
    return { ...state, userLogout: true };
  }
  if (action.type === USER_DETAILS) {
    return { ...state, userDetails: action.payload };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
