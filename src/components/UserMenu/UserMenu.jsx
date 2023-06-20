import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.user.email);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div>
        <p>Nice to see you {userEmail}</p>
        <button type="button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </>
  );
};
