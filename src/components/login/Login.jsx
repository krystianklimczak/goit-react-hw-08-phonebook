import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Modal from 'components/modal/Modal';
import { login } from 'redux/reducers/auth/operations';

import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Modal>
          <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
              Email
              <input type="text" name="email" className={css.input} required />
            </label>
            <label className={css.label}>
              Password
              <input type="password" name="password" className={css.input} required />
            </label>

            <div className={css.options}>
              <Button variant="contained" type="submit">
                Login
              </Button>
              <NavLink to="/register">
                <Button variant="contained">Register</Button>
              </NavLink>
            </div>
          </form>
        </Modal>
      </div>
    </HelmetProvider>
  );
}
