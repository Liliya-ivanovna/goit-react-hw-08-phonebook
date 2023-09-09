import { Li, Button, Span } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/operations';


export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Li>
      <Span>{name}</Span>
      <Span> {number}</Span>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </Li>
  );
};
