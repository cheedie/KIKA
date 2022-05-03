import React from "react";
import { Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";

import createToken from "../../utils/createToken";

const AuthenticateVendor = () => {
  const response = createToken();
  if (response) {
    console.log("AUTHENTICATE", response)
    // check if user is verified or has completed profile
    createBrowserHistory().push("/vendor");
    createBrowserHistory().go(0);
    return null;
  }

  return <Outlet />;
};

export default AuthenticateVendor;
