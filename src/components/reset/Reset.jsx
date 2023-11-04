import { useContacts } from 'hooks/ContactContext';

import css from './Reset.module.css';

export default function Reset() {
  const { handleReset } = useContacts();

  return (
    <div className={css.reset}>
      <button className={css.reset__btn} type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
