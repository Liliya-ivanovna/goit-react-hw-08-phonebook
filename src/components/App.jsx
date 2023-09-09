import { Container } from '@mui/material';
import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from './Loader/Loader';
import { AppRoutes } from 'config/routes';
import { refreshUser } from 'redux/auth/authOperations';
import { ComponentHeader } from './AppBar';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ComponentHeader />
      <Container>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </Container>
    </>
  );
};
