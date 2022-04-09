import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/user_reducer";
import { url } from "../utils/constant";
import axios from "axios";
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  USER_DETAILS,
  IS_AUTHENTICATED,
  REGISTER_USER,
} from "../actions";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

const initialState = {
  userDetails: "" || user,
  token: "" || token,
  register_user: null,
  loading: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadUserDetails = async (data) => {
    dispatch({ type: REGISTER_USER });
    try {
      const response = await axios.post(`${url}/auth/register`, data);
      console.log(response, "yayy");
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (details) => {
    dispatch({ type: REQUEST_LOGIN });

    try {
      const response = await axios.post(`${url}/auth/login`, details);

      if (response.data) {
        dispatch({ type: LOGIN_SUCCESS, payload: response });
        localStorage.setItem("currentUser", JSON.stringify(response));
        return response;
      }

      dispatch({ type: LOGIN_ERROR, error: response.errors[0] });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, error: error });
    }
  };

  return (
    <UserContext.Provider value={{ ...state, uploadUserDetails, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
