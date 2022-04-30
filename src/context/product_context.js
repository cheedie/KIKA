import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/product_reducer";
import { baseUrl } from "../utils/baseUrl";
import { products_url as url } from "../utils/constant";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  // UPLOAD_PRODUCT,
  // CREATE_PRODUCT,
  // CREATE_PRODUCT_SUCCESS,
  // CREATE_PRODUCT_ERROR
} from "../actions";

const ProductContext = React.createContext();

const initialState = {
  products_error: false,
  products_loading: false,
  products: [],
  new_arrivals: [],
  women: [],
  men: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await baseUrl.get("/products");
      console.log(response);
      const products = response.data.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data.data;

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        fetchProducts,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
