import Section from 'components/Sectiion/Section';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

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
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </Section>
  );
};
