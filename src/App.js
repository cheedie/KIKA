import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Landing from './components/landing-page/Landing';

function AppRoutes() {
  const routes = useRoutes([{ path: '/', element: <Landing /> }]);
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
