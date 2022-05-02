import React, { useContext, useReducer } from "react";
import reducer from "../reducers/vendor_reducer";
import { url, products_url } from "../utils/constant";
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
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  GET_VENDOR_PRODUCTS,
  GET_VENDOR_PRODUCTS_SUCCESS,
  GET_VENDOR_PRODUCTS_ERROR,
} from "../actions";

let token = localStorage.getItem("currentVendor")
  ? JSON.parse(localStorage.getItem("currentVendor")).token
  : "";

const initialState = {
  token: "" || token,
  register_user: null,
  loading: false,
  newPassword: "",
  vendorLogout: false,
  vendorDetails: {},
  product:{},
  products:[],
  getting_products_loading:false,
  getting_products_error: false,
  creating_product: false,
  creating_product_error: false,
  creating_product_message:''
};

const VendorContext = React.createContext();

export const VendorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const uploadVendorDetails = async (data) => {
    dispatch({ type: REGISTER_VENDOR });
   try {
      console.log('data from submit::: ',data)
      let formData = new FormData();

      for (let value in data) {
        formData.append(value, data[value]);
      }
      const response = await axios.post(`${url}/auth/register/vendor`, formData,
      {
        headers: {
          "Content-type": "application/json",
          }
     }).then(()=>{console.log(response, "yayy")})
    } catch (error) {
      console.log(error);
    }
  };


  const createProduct = async (data) => {
    dispatch({ type: CREATE_PRODUCT , payload: "Uploading product..."});
      let formData = new FormData();
      for (let value in data) {
        formData.append(value, data[value]);
      }

    return baseUrl.post(products_url, formData,
        { headers: {"Content-type": "application/json"} })
        .then(response =>{
          console.log("THIS IS PRODUCT CREATED", response.data?.data)
          console.log("THIS IS message", response.data?.message)
          dispatch({ type: CREATE_PRODUCT_SUCCESS, 
            payload: {message:response.data?.message,
                      data: response.data?.data}});
          return response;
        })
        .catch ((error)=> {
          let err 
        if(error.response){
          err = error.response.data ? error.response.data :
          error.response.status ? error.response.status :
          error.response.headers
          console.log("Error response", err)
        }else if(error.request){
          err = error.request
          console.log("Error request",err)
        }else{
          err = error.message
          console.log("Error message",err)
        }
        console.log(error.config)
        dispatch({ type: CREATE_PRODUCT_ERROR, payload: `${err.error.includes("name")?"Product name already exists":err.error}` });
        return err;
      })
  };
  const getVendorProducts = async (id) => {
  dispatch({ type: GET_VENDOR_PRODUCTS});
  console.log("passed ID", id)

  try {
    const response = await baseUrl.get(`${products_url}/vendor/${id}`);
    const products = response.data?.data;
    dispatch({ type: GET_VENDOR_PRODUCTS_SUCCESS, payload: products });
  
  } catch (error) {
    dispatch({ type: GET_VENDOR_PRODUCTS_ERROR });
  }
  };

  const loginVendor = async (details) => {
    dispatch({ type: REQUEST_VENDOR_LOGIN });

    try {
      const response = await axios.post(`${url}/auth/login`, details);

      if (response.status === 200) {
        dispatch({ type: LOGIN_VENDOR_SUCCESS, payload: response });

        localStorage.setItem("currentUser", JSON.stringify(response.data));
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
      const vendorDetails = response.data?.data;
      dispatch({ type: VENDOR_DETAILS, payload: vendorDetails });
      return vendorDetails
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
      // const response = await baseUrl.get("/auth/logout");
      // console.log(response);
      localStorage.removeItem("currentUser");
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
        createProduct,
        getVendorProducts
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};

export const useVendorContext = () => {
  return useContext(VendorContext);
};
