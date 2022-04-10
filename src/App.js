
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Landing from "./components/landing-page/Landing";
import Vendor from "./components/vendor/Vendor";
import Signup from "./components/User/Signup";
import Signin from "./components/User/Signin";
import UserAccount from "./pages/user/UserAccountPage";
import Contact from "./components/StaticPages/Contact"
import ErrorPage from "./components/StaticPages/Error"
import ConditionsPage from "./components/StaticPages/Condition/termConditions"

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/user/signup", element: <Signup /> },
    { path: "/user/signin", element: <Signin /> },
    
    { path: "/user/account", element: <UserAccount /> },
     { path: "/buyer/contactus", element: <Contact /> },
    { path: "/errorpage", element: <ErrorPage /> },
    { path: "/conditionspage", element: <ConditionsPage /> },
    { path: "/vendor/*", element: <Vendor /> },
  ]);
  return routes;
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

