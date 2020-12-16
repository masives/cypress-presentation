import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  component: React.ElementType;
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!window.localStorage.getItem('authToken');

  return <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
