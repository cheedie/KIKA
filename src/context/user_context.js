import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/user_reducer";
import { url } from "../utils/constant";
import axios from "axios";
import { USER_LOGIN, USER_LOGOUT } from "../actions";

const initialState = {
  userLogin: false,
  userLogout: false,
};

const UserContext = React.creatContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider>{}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
