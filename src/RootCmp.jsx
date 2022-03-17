import { routes } from './routes.js';
import { BrowserRouter as Router, Routes, Switch, Route, useLocation } from 'react-router-dom';

export function RootCmp() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} exact element={<route.component />} path={route.path} />
        ))}
      </Routes>
    </Router>
  );
}
