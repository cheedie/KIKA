import React from "react";
import { Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";

import createToken from "../../utils/createToken";

const Authorize = () => {
  const response = createToken();
  console.log("TOKEN", response)
  if (response) {
    
  console.log("TOKEN", response)
    // check if user is verified or has completed profile
    return <Outlet />;
  }
  createBrowserHistory().push("/user/signin");
  createBrowserHistory().go(0);
  return null;
};

export default Authorize;
