import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/user_reducer";
import { url } from "../utils/constant";
import axios from "axios";
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_DETAILS,
  IS_AUTHENTICATED,
  REGISTER_USER,
} from "../actions";

const initialState = {
  userDetails: null,
  isAuthenticated: false,
  register_user: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadUserDetails = async (data) => {
    dispatch({ type: REGISTER_USER });
    try {
      const response = await axios.post(`${url}/buyer/register`, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, uploadUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
