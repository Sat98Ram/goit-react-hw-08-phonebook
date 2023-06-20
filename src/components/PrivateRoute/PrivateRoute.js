import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelectors';

const PrivateRoute = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
