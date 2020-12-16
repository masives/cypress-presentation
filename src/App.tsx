import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginPage from './components/login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/login'} component={LoginPage} />
        <PrivateRoute path="/" component={() => <div>dashboard</div>} />
      </Switch>
    </Router>
  );
}

export default App;
