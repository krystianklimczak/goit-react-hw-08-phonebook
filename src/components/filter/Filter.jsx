import { useContacts } from 'hooks/ContactContext';

import css from './Filter.module.css';

export default function Filter() {
  const { filter, handleFilter } = useContacts();

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
          className={css.input}
        />
      </label>
    </div>
  );
}
