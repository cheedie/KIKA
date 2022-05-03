import {
  REGISTER_USER,
  USER_DETAILS,
  USER_DETAILS_ERROR,
  USER_DETAILS_BEGIN,
  REQUEST_LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  CHANGE_PASSWORD,
  USER_LOGOUT,
  GET_STATE,
  GET_CITIES,
  REGISTER_DELIVERY_DETAILS,
  REGISTER_DELIVERY_SUCCESS,
} from "../actions";

const user_reducer = (state, action) => {
  if (action.type === REGISTER_USER) {
    return { ...state, register_user: action.payload };
  }
  if (action.type === REGISTER_DELIVERY_DETAILS) {
    return { ...state };
  }
  if (action.type === REGISTER_DELIVERY_SUCCESS) {
    return { ...state, deliveryStatus: action.payload };
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
  if (action.type === GET_STATE) {
    return { ...state, stateDetails: action.payload };
  }

  if (action.type === GET_CITIES) {
    return { ...state, cityDetails: action.payload };
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
  if (action.type === USER_DETAILS_BEGIN) {
    return { ...state, user_details_loading: true, user_details_error: false };
  }
  if (action.type === USER_DETAILS) {
    return {
      ...state,
      user_details_loading: false,
      userDetails: action.payload,
    };
  }
  if (action.type === USER_DETAILS_ERROR) {
    return {
      ...state,
      user_details_loading: false,
      user_details_error: true,
    };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default user_reducer;
