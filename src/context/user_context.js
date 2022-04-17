import React, { useContext, useReducer } from "react";
import reducer from "../reducers/user_reducer";
import { url } from "../utils/constant";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  USER_DETAILS,
  REGISTER_USER,
  CHANGE_PASSWORD,
} from "../actions";

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

const initialState = {
  token: "" || token,
  register_user: null,
  loading: false,
  newPassword: "",
  userLogout: false,
  userDetails: {},
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

      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: response });

        localStorage.setItem("currentUser", JSON.stringify(response.data));
        return response;
      }

      dispatch({ type: LOGIN_ERROR, error: response.errors[0] });
      return null;
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, error: error });
      return null;
    }
  };

  const getUser = async () => {
    try {
      const response = await baseUrl.get("/auth/profile");
      const userDetails = response.data?.data;
      dispatch({ type: USER_DETAILS, payload: userDetails });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (details) => {
    dispatch({ type: CHANGE_PASSWORD });
    try {
      const response = await baseUrl.put("/auth/updatepassword", details);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    dispatch({ type: USER_LOGOUT });
    try {
      const response = await baseUrl.get("/auth/logout");
      console.log(response);
      localStorage.removeItem("currentUser");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        uploadUserDetails,
        loginUser,
        getUser,
        changePassword,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
