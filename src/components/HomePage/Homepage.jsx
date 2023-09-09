import { Wrapper, InviteBox, ContentBox } from './HomePage.styled';
import { useSelector } from 'react-redux';
import { selectIsAutenticated } from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import { REGISTER_ROUTE, LOGIN_ROUTE } from 'config/routes';

const HomePage = () => {
  const isRegistered = useSelector(selectIsAutenticated);

  return (
    <Wrapper>
      <ContentBox>
        <h2>Phonebook</h2>
        <h2>Phonebook</h2>
      </ContentBox>
      {!isRegistered && (
        <InviteBox>
          Please
          <NavLink to={REGISTER_ROUTE} style={{ color: 'inherit' }}>
            {' '}
            register{' '}
          </NavLink>{' '}
          or
          <NavLink to={LOGIN_ROUTE} style={{ color: 'inherit' }}>
            {' '}
            log in{' '}
          </NavLink>
          to continue
        </InviteBox>
      )}
    </Wrapper>
  );
};

export default HomePage;
