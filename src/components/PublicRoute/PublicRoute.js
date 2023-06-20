import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';

export const PublicRoute = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Navigate to={'/contacts'} /> : <Outlet />;
};

export default PublicRoute;
