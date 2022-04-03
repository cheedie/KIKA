import "./App.css";
import { BrowserRouter as Router, Route, useRoutes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function AppRoutes() {
  const routes = useRoutes([{ path: "/", element: <LandingPage /> }]);
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
