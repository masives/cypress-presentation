import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/login'} component={LoginPage} />
        <PrivateRoute path="/" component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
