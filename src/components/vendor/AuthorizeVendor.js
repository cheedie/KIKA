import React from "react";
import { Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";

import createToken from "../../utils/createToken";

const AuthorizeVendor = () => {
  const response = createToken();
  if (response) {
    // check if user is verified or has completed profile
    return <Outlet />;
  }
  createBrowserHistory().push("/vendor/signin");
  createBrowserHistory().go(0);
  return null;
};

export default AuthorizeVendor;
