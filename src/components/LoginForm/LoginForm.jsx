import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Typography, TextField } from '@mui/material';
import { Form, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          marginTop: 7,
          display: { xs: 'none', md: 'flex', justifyContent: 'center' },
          fontWeight: 500,
          fontSize: 40,
          letterSpacing: '.2rem',
        }}
      >
        Login
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          onChange={handleChange}
          type="email"
          label="Enter your email"
          name="email"
          value={email}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          onChange={handleChange}
          type="password"
          label="Enter your password"
          name="password"
          value={password}
          minLength={7}
          required
        />
        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};
