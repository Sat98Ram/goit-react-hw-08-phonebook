import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { LoginPage } from 'pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { getUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    if (!isAuth) {
      dispatch(getUser());
    }
  }, [dispatch, isAuth]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="register" />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
