import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Modal from 'components/modal/Modal';
import { register } from 'redux/reducers/auth/operations';

import css from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name: username,
        email,
        password,
      })
    );
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <Modal>
          <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
              User Name
              <input type="text" name="username" className={css.input} required />
            </label>
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
                Register
              </Button>
              <NavLink to="/login">
                <Button variant="contained">Login</Button>
              </NavLink>
            </div>
          </form>
        </Modal>
      </div>
    </HelmetProvider>
  );
}
