import Cookies from 'js-cookie';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const ProtectedRoute = ({ component: Component, ...rest }: ProtectedRouteProps) => {
  const jwtToken = Cookies.get('jwt_token');
    
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  
  return <Route {...rest} render={(props: any) => <Component {...props} />} />;
};

export default ProtectedRoute;
