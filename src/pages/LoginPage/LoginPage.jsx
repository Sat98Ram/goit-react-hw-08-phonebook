import Section from 'components/Section/Section';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import css from './LoginPage.module.css';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <Section>
      <form onSubmit={handleSubmit} className={css.loginForm}>
        <label className={css.inputLabel}>Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
          className={css.loginInput}
        />
        <label className={css.inputLabel}>Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          className={css.loginInput}
        />
        <button type="submit" className={css.BtnLogin}>
          Sign Up
        </button>
      </form>
    </Section>
  );
};
