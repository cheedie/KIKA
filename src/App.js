
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Landing from "./components/landing-page/Landing";
import Vendor from "./components/vendor/Vendor";
import Vendorregister from "./components/vendor/VendorSignup";
import Signup from "./pages/user/Signup";
import Signin from "./pages/user/Signin";
import UserAccount from "./pages/user/UserAccountPage";
import Contact from "./pages/StaticPages/Contact";
import Errorpage from "./pages/StaticPages/Error";
import Conditionpage from "./pages/StaticPages/termConditions";
import Waitlist from "./pages/StaticPages/Waitlist";
import OurPolicy from "./pages/StaticPages/OurPolicy";
import SignOut from "./pages/user/SignOut";
import TrackOrder from "./pages/user/TrackOrders";
import Notifications from "./pages/user/Notification";
import MyOrders from "./pages/user/MyOrders";
import ChangePassword from "./pages/user/ChangePassword";
import VendorSignup from "./components/vendor/VendorSignup";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/landing", element: <Landing /> },
    { path: "/user/signup", element: <Signup /> },
    { path: "/user/signin", element: <Signin /> },
    { path: "/user/account", element: <UserAccount /> },
    { path: "/user/account/trackorder", element: <TrackOrder /> },
    { path: "/user/account/myorders", element: <MyOrders /> },
    { path: "/user/account/signout", element: <SignOut /> },
    { path: "/user/account/notifications", element: <Notifications /> },
    { path: "/user/account/changepassword", element: <ChangePassword /> },

    { path: "/buyer/signup", element: <Signup /> },
    { path: "/buyer/signin", element: <Signin /> },
    { path: "/vendor/*", element: <Vendor /> },
    { path: "/vendor/signup", element: <VendorSignup /> },

    { path: "/buyer/contact", element: <Contact /> },
    { path: "/termscondition", element: <Conditionpage /> },
    { path: "/*", element: <Errorpage /> },
    { path: "/", element: <Waitlist /> },
    { path: "/ourpolicy", element: <OurPolicy /> },

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
