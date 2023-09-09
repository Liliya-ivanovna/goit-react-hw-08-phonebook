import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { LOGIN_ROUTE } from 'config/routes';
import { selectIsAutenticated } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children, redirectTo = LOGIN_ROUTE }) => {
  const authenticated = useSelector(selectIsAutenticated);
  return authenticated ? children : <Navigate to={redirectTo} replace />;
};
