import React, { useContext, useReducer } from "react";
import reducer from "../reducers/vendor_reducer";
import { url } from "../utils/constant";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import {
  REQUEST_VENDOR_LOGIN,
  LOGIN_VENDOR_SUCCESS,
  LOGIN_VENDOR_ERROR,
  VENDOR_LOGOUT,
  VENDOR_DETAILS,
  REGISTER_VENDOR,
  CHANGE_VENDOR_PASSWORD,
} from "../actions";

let token = localStorage.getItem("currentVendor")
  ? JSON.parse(localStorage.getItem("currentVendor")).token
  : "";

const initialState = {
  token: "" || token,
  register_user: null,
  loading: false,
  newPassword: "",
  userLogout: false,
  userDetails: {},
};

const VendorContext = React.createContext();

export const VendorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadVendorDetails = async (data) => {
    dispatch({ type: REGISTER_VENDOR });
    try {
      console.log('data from submit::: ',data)
      const formData = new FormData();
      formData.append('image', data.image)
      console.log("formData", formData)
      const response = await axios.post(`${url}/auth/register/vendor`, formData,
      {
        headers: {
          "Content-type": "application/json"
        }
     }
      ).then(()=>{console.log(response, "yayy")})
    } catch (error) {
      console.log(error);
    }
  };

  const loginVendor = async (details) => {
    dispatch({ type: REQUEST_VENDOR_LOGIN });

    try {
      const response = await axios.post(`${url}/auth/login`, details);

      if (response.status === 200) {
        dispatch({ type: LOGIN_VENDOR_SUCCESS, payload: response });

        localStorage.setItem("currentVendor", JSON.stringify(response.data));
        return response;
      }

      dispatch({ type: LOGIN_VENDOR_ERROR, error: response.errors[0] });
      return null;
    } catch (error) {
      dispatch({ type: LOGIN_VENDOR_ERROR, error: error });
      return null;
    }
  };

  const getVendor = async () => {
    try {
      const response = await baseUrl.get("/auth/profile");
      const userDetails = response.data?.data;
      dispatch({ type: VENDOR_DETAILS, payload: userDetails });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async (details) => {
    dispatch({ type: CHANGE_VENDOR_PASSWORD });
    try {
      const response = await baseUrl.put("/auth/updatepassword", details);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    dispatch({ type: VENDOR_LOGOUT });
    try {
      const response = await baseUrl.get("/auth/logout");
      console.log(response);
      localStorage.removeItem("currentVendor");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <VendorContext.Provider
      value={{
        ...state,
        uploadVendorDetails,
        loginVendor,
        getVendor,
        changePassword,
        signOut,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendorContext = () => {
  return useContext(VendorContext);
};
