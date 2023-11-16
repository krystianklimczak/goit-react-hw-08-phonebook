import { useDispatch } from 'react-redux';
import { resetContacts } from 'redux/contactSlice';

import css from './Reset.module.css';

export default function Reset() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetContacts());
  };

  return (
    <div className={css.reset}>
      <button className={css.reset__btn} type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
