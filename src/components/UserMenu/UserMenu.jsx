import { IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  return (
    <>
      <span>{userEmail}</span>
      <IconButton
        edge="end"
        color="inherit"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <Logout />
      </IconButton>
    </>
  );
};
