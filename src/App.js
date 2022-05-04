import "./App.css";
import {
  BrowserRouter as Router,
  useRoutes,
  Route,
  Routes,
} from "react-router-dom";
import Landing from "./pages/Landing";

import Vendor from "./pages/vendor/Vendor";
import VendorSignup from "./pages/vendor/VendorSignup";
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
import Authorize from "./components/User/Authorize";
import Authenticate from "./components/User/Authenticate";
import AuthorizeVendor from "./components/vendor/AuthorizeVendor";
import AuthenticateVendor from "./components/vendor/AuthenticateVendor";
import Women from "./pages/marketPlace/Women";
import Men from "./pages/marketPlace/Men";
import Home from "./pages/home/Home";
import MyCart from "./pages/Cart/MyCart";
import MarketPlace from "./pages/marketPlace/MarketPlace";
import ProductDetails from "./pages/productDescription/ProductDetails";
import Delivery from "./pages/Cart/Delivery";
//import FlutterCheckout from "./components/User/FlutterCheckout";
// import PaymentOptions from "./pages/Cart/PaymentOptions";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/landing", element: <Landing /> },
    { path: "/home", element: <Home /> },

    { path: "/products/:id", element: <ProductDetails /> },
    { path: "/products", element: <MarketPlace /> },
    { path: "/products/women", element: <Women /> },
    { path: "/products/men", element: <Men /> },

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
        { path: "/vendor/*", element: <Vendor /> },
      ],
    },
    {
      element: <AuthenticateVendor />,
      children: [
        { path: "/vendor/signup", element: <VendorSignup /> },
        { path: "/vendor/signin", element: <Signin /> },
      ],
    },

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
    { path: "/mycart", element: <MyCart /> },
    // { path: "/payment", element: <FlutterCheckout /> },

    { path: "/delivery", element: <Delivery /> },
    // { path: "/payment", element: <PaymentOptions /> },
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