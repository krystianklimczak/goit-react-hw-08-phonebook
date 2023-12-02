import React from 'react';

import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.logo}>
      ☎️ <span>phonebook</span>
    </div>
  );
}
