import Section from 'components/Section/Section';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import css from './RegisterPage.module.css';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Section>
      <form onSubmit={handleSubmit} className={css.registerForm}>
        <label className={css.registerLabel}>Name</label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
          className={css.registerInput}
        />
        <label className={css.registerLabel}>Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
          className={css.registerInput}
        />
        <label className={css.registerLabel}>Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          className={css.registerInput}
        />
        <button type="submit" className={css.btnRegister}>
          Sign Up
        </button>
      </form>
    </Section>
  );
};
