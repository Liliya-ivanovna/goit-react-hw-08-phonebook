import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/phonebook/selectors';
import { Typography } from '@mui/material';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          display: { xs: 'none', md: 'flex', justifyContent: 'center' },
          fontWeight: 700,
          letterSpacing: '.1rem',
          mt: 7,
          color: '#0970e7',
          textShadow: '3px 3px 3px rgba(168, 168, 168, 0.8)',
        }}
      >
        PHONEBOOK
      </Typography>
      <ContactForm />
      <Typography
        variant="h3"
        sx={{
          display: { xs: 'none', md: 'flex', justifyContent: 'center' },
          fontWeight: 700,
          mt: 7,
          mb: 5,
          color: '#0970e7',
        }}
      >
        CONTACTS
      </Typography>
      <Filter />
      {!error && <ContactList />}
      {isLoading && !error && <Loader />}
    </div>
  );
};

export default Contacts;
