import React, { useContext, useReducer } from "react";

import reducer from "../reducers/order_reducer";
import { url } from "../utils/constant";
import { baseUrl } from "../utils/baseUrl";
import { ORDER_DETAILS } from "../actions";

const initialState = {
  orderDetails: {},
};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const placeOrder = async (data, navigate) => {
    try {
      const response = await baseUrl.post("/orders", data);
      console.log(response);
      const orderDetails = response;
      dispatch({ type: ORDER_DETAILS, payload: orderDetails });
      navigate("/ordersuccessful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        placeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
