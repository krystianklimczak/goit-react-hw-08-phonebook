import React from 'react';
import { AppBar, Button } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { DoorClosed, DoorOpen, House, PersonRolodex } from 'react-bootstrap-icons';

import { useAuth } from 'hook/useAuth';
import Logo from 'components/logo/Logo';
import css from './SharedLayout.module.css';
import Header from 'components/header/Header';
import Container from 'components/container/Container';
import LogoutButton from 'components/logoutButton/LogoutButton';
import UserMenu from 'components/userMenu/UserMenu';

const AuthenticatedNav = () => (
  <>
    <NavLink to="contacts">
      <Button variant="contained" size="large" endIcon={<PersonRolodex />}>
        Contacts
      </Button>
    </NavLink>
    <LogoutButton />
  </>
);

const UnauthenticatedNav = () => (
  <>
    <NavLink to="login">
      <Button variant="contained" size="large" endIcon={<DoorOpen />}>
        Login
      </Button>
    </NavLink>

    <NavLink to="register">
      <Button variant="contained" size="large" endIcon={<DoorClosed />}>
        Register
      </Button>
    </NavLink>
  </>
);

export default function SharedLayout() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <AppBar position="relative">
        <Header>
          <Logo />
          <nav className={css.navigation}>
            {isLoggedIn && <UserMenu />}
            <NavLink to="/goit-react-hw-08-phonebook">
              <Button variant="contained" size="large" endIcon={<House />}>
                Home
              </Button>
            </NavLink>
            {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
          </nav>
        </Header>
      </AppBar>
      <Outlet />
    </Container>
  );
}
