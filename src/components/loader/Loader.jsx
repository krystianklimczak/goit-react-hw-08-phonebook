import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}
