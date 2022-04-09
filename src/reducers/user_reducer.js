import {
  REGISTER_USER,
  USER_DETAILS,
  REQUEST_LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
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
      user: action.payload.user,
      token: action.payload.token,
      loading: false,
    };
  }

  if (action.type === LOGIN_ERROR) {
    return { ...state, loading: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
