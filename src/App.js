import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import Signup from "./components/User/Signup";
import Signin from "./components/User/Signin";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/buyer/signup", element: <Signup /> },
    { path: "/buyer/signin", element: <Signin /> },
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
