import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div>
      <Link to="/goit-react-hw-08-phonebook">
        <Button variant="contained">Go back to main page</Button>
      </Link>
    </div>
  );
}
