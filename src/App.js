

import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import LandingPage from "./components/landing-page/Landing";
//import Dashboard from "./components/vendor/Dashboard"
import Vendor from "./components/vendor/Vendor"
import Signup from "./components/User/Signup";
import Signin from "./components/User/Signin"; 
import Contact from "./components/StaticPages/Contact"
import ErrorPage from "./components/StaticPages/Error"
import ConditionsPage from "./components/StaticPages/Condition/termConditions"

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/buyer/signup", element: <Signup /> },
    { path: "/buyer/signin", element: <Signin /> },
    { path: "/buyer/contactus", element: <Contact /> },
    { path: "/errorpage", element: <ErrorPage /> },
    { path: "/conditionspage", element: <ConditionsPage /> },
  ]);
  return routes;
}

function App() {
  return (
    <Router>
      {/* <AppRoutes /> */}
      <ConditionsPage/>
    </Router>
  );
}

export default App;

