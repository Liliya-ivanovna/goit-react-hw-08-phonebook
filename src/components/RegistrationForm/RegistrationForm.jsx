import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Form, Button } from './Registration.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
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
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
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
        Registration
      </Typography>
      <Form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          type="text"
          label="Enter your name"
          name="name"
          onChange={handleChange}
          value={name}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="email"
          label="Enter your email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Enter your password"
          name="password"
          minLength={7}
          onChange={handleChange}
          value={password}
          required
        />
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};
