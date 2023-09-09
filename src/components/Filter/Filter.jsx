import { Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/phonebook/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Container
      sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}
    >
      <TextField
        autoComplete="on"
        margin="normal"
        sx={{ width: '55ch' }}
        variant="outlined"
        label=" Find contacts by name"
        type="text"
        name="filter"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </Container>
  );
};
