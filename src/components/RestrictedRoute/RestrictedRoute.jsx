import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAutenticated } from 'redux/auth/authSelectors';

import { HOME_ROUTE } from 'config/routes';

export const RestrictedRoute = ({ children, redirectTo = HOME_ROUTE }) => {
  const authenticated = useSelector(selectIsAutenticated);
  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};
