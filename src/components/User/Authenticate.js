import React from "react";
import { Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";

import createToken from "../../utils/createToken";

const Authenticate = () => {
  const response = createToken();
  if (response) {
    
    // check if user is verified or has completed profile
    createBrowserHistory().push("/user/account");
    createBrowserHistory().go(0);
    return null;
  }

  return <Outlet />;
};

export default Authenticate;
