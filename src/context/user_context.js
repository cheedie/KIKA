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
  USER_DETAILS_BEGIN,
  USER_DETAILS_ERROR,
  REGISTER_USER,
  CHANGE_PASSWORD,
  GET_STATE,
  GET_CITIES,
  REGISTER_DELIVERY_DETAILS,
  REGISTER_DELIVERY_SUCCESS,
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
  stateDetails: [],
  cityDetails: [],
  user_details_error: false,
  user_details_loading: false,
  deliveryStatus: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadUserDetails = async (data) => {
    dispatch({ type: REGISTER_USER });
    try {
      const response = await axios.post(`${url}/auth/register`, data);
      console.log(response);
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
    dispatch({ type: USER_DETAILS_BEGIN });

    try {
      const response = await baseUrl.get("/auth/profile");
      const userDetails = response.data?.data;
      dispatch({ type: USER_DETAILS, payload: userDetails });
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_DETAILS_ERROR });
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

  const signOut = () => {
    dispatch({ type: USER_LOGOUT });
    try {
      localStorage.removeItem("currentUser");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const deliveryDetails = async (data, navigate) => {
    // dispatch({ type: REGISTER_DELIVERY_DETAILS });
    try {
      const response = await baseUrl.put("/auth/updatedetails", data);
      console.log(response);

      dispatch(getUser());
      // dispatch({ type: REGISTER_DELIVERY_SUCCESS, payload: true });
      navigate("/checkout");
    } catch (error) {
      console.log(error);
    }
  };

  const getState = async () => {
    try {
      const response = await axios.get("https://locus.fkkas.com/api/states");
      const stateDetails = response.data?.data;
      dispatch({ type: GET_STATE, payload: stateDetails });
    } catch (error) {
      console.log(error);
    }
  };

  const getCity = async (state) => {
    try {
      const response = await axios.get(
        `https://locus.fkkas.com/api/regions/${state}`
      );

      const cityDetails = response.data?.data;

      dispatch({ type: GET_CITIES, payload: cityDetails });
    } catch (error) {
      console.log(error);
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
        getState,
        getCity,
        deliveryDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
