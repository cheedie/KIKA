import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/product_reducer";
import { baseUrl } from "../utils/baseUrl";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const ProductContext = React.createContext();

const initialState = {
  products_error: false,
  products_loading: false,
  products: [],
  new_arrivals: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await baseUrl.get("/auth/profile");
      const products = response.data.products;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async () => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await baseUrl.get("/auth/profile");
      const singleProduct = response.data.product;
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
