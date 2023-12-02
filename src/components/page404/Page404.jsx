import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div>
      Page404
      <button>
        <Link to="https://krystianklimczak.github.io/goit-react-hw-08-phonebook">
          Go back to main page
        </Link>
      </button>
    </div>
  );
}
