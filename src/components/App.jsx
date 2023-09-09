import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Home } from '@mui/icons-material';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';
import { UserMenu } from './UserMenu/UserMenu';
import { HOME_ROUTE, appRoutes } from 'config/routes';
import { selectIsAutenticated } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';

const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const autenticated = useSelector(selectIsAutenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="span"
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
                justifyContent: 'space-between',
              },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {autenticated ? (
              <UserMenu />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Home
                  color="inherit"
                  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                />{' '}
                <NavLink
                  to={HOME_ROUTE}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  HOME
                </NavLink>
              </div>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
