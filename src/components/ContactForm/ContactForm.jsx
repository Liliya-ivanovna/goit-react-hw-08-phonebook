import { Button, Form } from './ContactForm.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, requestContacts } from 'redux/phonebook/operations';
import { getContacts } from 'redux/phonebook/selectors';
import { TextField } from '@mui/material';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      form.reset();
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <>
      <Form onSubmit={onHandleSubmit}>
        <TextField
          label="  Name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          label=" Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />{' '}
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
