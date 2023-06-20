import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
      <header>
        {isAuth ? (
          <UserMenu email={''} />
        ) : (
          <nav>
            <NavLink to="/register" end>
              Registration
            </NavLink>
            <NavLink to="/login" end>
              Log In
            </NavLink>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};
