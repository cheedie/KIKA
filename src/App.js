import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Landing from "./pages/Landing";

import Vendor from "./components/vendor/Vendor";
import VendorSignup from "./components/vendor/VendorSignup";
import Signup from "./pages/user/Signup";
import Signin from "./pages/user/Signin";
import UserAccount from "./pages/user/UserAccountPage";
import Contact from "./pages/StaticPages/Contact";
import Errorpage from "./pages/StaticPages/Error";
import Conditionpage from "./pages/StaticPages/termConditions";
import Waitlist from "./pages/StaticPages/Waitlist";
import OurPolicy from "./pages/StaticPages/OurPolicy";
import Aboutus from "./pages/StaticPages/Aboutus";
import Ourteam from "./pages/StaticPages/Ourteam";
import Faqs from "./pages/StaticPages/FAQ";
import SignOut from "./pages/user/SignOut";
import TrackOrder from "./pages/user/TrackOrders";
import Notifications from "./pages/user/Notification";
import MyOrders from "./pages/user/MyOrders";
import ChangePassword from "./pages/user/ChangePassword";
import Authorize from "./components/User/Authorize";
import Authenticate from "./components/User/Authenticate";
import AuthorizeVendor from "./components/vendor/AuthorizeVendor";
// import AuthenticateVendor from "./components/vendor/AuthenticateVendor";
import Women from "./pages/marketPlace/Women";
import Men from "./pages/marketPlace/Men";
import Home from "./pages/home/Home";
import MyCart from "./pages/Cart/MyCart";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import ProductDetails from "./pages/productDescription/ProductDetails";
import Delivery from "./pages/Cart/Delivery";
import OrderSuccessful from "./pages/Cart/OrderSuccessful";

import Checkout from "./pages/Cart/Checkout";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/home", element: <Home /> },

    { path: "/products/:id", element: <ProductDetails /> },
    { path: "/products", element: <MarketPlace /> },
    { path: "/products/women", element: <Women /> },
    { path: "/products/men", element: <Men /> },

    // { path: "/vendor", element: <Vendor /> },

    {
      element: <Authorize />,
      children: [
        { path: "/user/account", element: <UserAccount /> },
        { path: "/user/account/trackorder", element: <TrackOrder /> },
        { path: "/user/account/myorders", element: <MyOrders /> },
        { path: "/user/account/signout", element: <SignOut /> },
        { path: "/delivery", element: <Delivery /> },

        {
          path: "/user/account/notifications",
          element: <Notifications />,
        },
        {
          path: "/user/account/changepassword",
          element: <ChangePassword />,
        },

        // { path: "/vendor", element: <Vendor /> },
      ],
    },

    {
      element: <Authenticate />,
      children: [
        { path: "/user/signup", element: <Signup /> },
        { path: "/user/signin", element: <Signin /> },
      ],
    },
    {
      element: <AuthorizeVendor />,
      children: [
        { path: "/vendor/signin", element: <Signin /> },

        { path: "/vendor/*", element: <Vendor /> },
      ],
    },

    { path: "/vendor/signup", element: <VendorSignup /> },

    // {
    //   element: <AuthenticateVendor />,
    //   children: [

    //   ],
    // },

    { path: "/buyer/signup", element: <Signup /> },
    { path: "/buyer/signin", element: <Signin /> },

    { path: "/buyer/contact", element: <Contact /> },
    { path: "/termscondition", element: <Conditionpage /> },
    { path: "/*", element: <Errorpage /> },
    { path: "/", element: <Waitlist /> },
    { path: "/ourpolicy", element: <OurPolicy /> },

    { path: "/buyer/contact", element: <Contact /> },
    { path: "/termscondition", element: <Conditionpage /> },
    { path: "/*", element: <Errorpage /> },
    { path: "/", element: <Waitlist /> },
    { path: "/ourpolicy", element: <OurPolicy /> },
    { path: "/aboutus", element: <Aboutus /> },
    { path: "/ourteam", element: <Ourteam /> },
    { path: "/faq", element: <Faqs /> },
    { path: "/mycart", element: <MyCart /> },

    { path: "/delivery", element: <Delivery /> },

    { path: "/ordersuccessful", element: <OrderSuccessful /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/vendor/signup", element: <VendorSignup /> },
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
