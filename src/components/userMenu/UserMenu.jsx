import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/reducers/auth/selectors';

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div>
      Welcome <b>{user}</b> 💪
    </div>
  );
}
