import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
//import Dashboard from "./components/vendor/Dashboard"
import Vendor from "./components/vendor/Vendor"

function AppRoutes() {
  const routes = useRoutes([{ path: "/", element: <LandingPage /> }]);
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
