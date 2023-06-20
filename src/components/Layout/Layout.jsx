import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { token } from 'redux/http';

export const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <header>
        {isAuth ? (
          <div>
            <p>mango@mail.com</p>
            <button type="button" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        ) : (
          <nav>
            <NavLink to="/register" end>
              Registration
            </NavLink>
            <NavLink to="/login" end>
              Log In
            </NavLink>
            {/* <NavLink to="/contacts" end>
              Contacts
            </NavLink> */}
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};
