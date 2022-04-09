import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Landing from "./components/landing-page/Landing";
//import Dashboard from "./components/vendor/Dashboard"
import Vendor from "./components/vendor/Vendor"
import Signup from "./components/User/Signup";
import Signin from "./components/User/Signin";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/buyer/signup", element: <Signup /> },
    { path: "/buyer/signin", element: <Signin /> },
  ]);
  return routes;
}

function App() {
  return (
    <Router>
      {/* <AppRoutes /> */}
      <Vendor/>
    </Router>
  );
}

export default App;
