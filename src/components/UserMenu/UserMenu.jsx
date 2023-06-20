import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = ({ email }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div>
        <p>Nice to see you </p>
        <button type="button" onClick={handleLogOut}>
          Logout
        </button>
      </div>
    </>
  );
};
