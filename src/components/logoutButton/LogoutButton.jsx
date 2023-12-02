import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { DoorClosedFill } from 'react-bootstrap-icons';

import { logout } from 'redux/reducers/auth/operations';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Button variant="contained" size="large" onClick={handleClick} endIcon={<DoorClosedFill />}>
      Logout
    </Button>
  );
}
