import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';
import Section from 'components/Section/Section';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.user.email);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div className={css.userMenu}>
        <p className={css.userEmail}>{userEmail}</p>
        <button type="button" onClick={handleLogOut} className={css.btnLogout}>
          Logout
        </button>
      </div>
    </>
  );
};
