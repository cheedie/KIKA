import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Landing from "./components/landing-page/Landing";
// import Dashboard from "./components/vendor/Dashboard";
// import Orders from "./components/vendor/Orders";
// import Products from "./components/vendor/Products";
// import Report from "./components/vendor/Report";
// import Reviews from "./components/vendor/Reviews";
import Vendor from "./components/vendor/Vendor";
import Signup from "./components/User/Signup";
import Signin from "./components/User/Signin";
import UserAccount from "./pages/user/UserAccountPage";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/user/signup", element: <Signup /> },
    { path: "/user/signin", element: <Signin /> },
    { path: "/vendor", element: <Vendor /> },
    { path: "/user/account", element: <UserAccount /> },
    // { path: "/vendor/dashboard", element: <Dashboard /> },
    // { path: "/vendor/orders", element: <Orders /> },
    // { path: "/vendor/products", element: <Products /> },
    // { path: "/vendor/report", element: <Report /> },
    // { path: "/vendor/reviews", element: <Reviews /> },
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
