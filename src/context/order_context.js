import React, { useContext, useReducer } from "react";

import reducer from "../reducers/order_reducer";
import { url } from "../utils/constant";
import { baseUrl } from "../utils/baseUrl";
import { ORDER_DETAILS } from "../actions";

const initialState = {};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const placeOrder = async (data, navigate) => {
    try {
      console.log(data);

      const response = await baseUrl.post("/orders", data);
      console.log(response);
      const orderDetails = response.data;
      console.log(orderDetails);
      dispatch({ type: ORDER_DETAILS });
      navigate("/ordersuccessful");
    } catch (error) {
      console.log(error);
    }
  };

  const getOrder = async () => {
    try {
      const response = await baseUrl.get("/orders");
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        placeOrder,
        getOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
