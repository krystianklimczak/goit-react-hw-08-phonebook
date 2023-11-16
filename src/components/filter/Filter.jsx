import { filterContacts } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

export default function Filter() {
  const filterr = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = ev => {
    dispatch(filterContacts(ev.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterr}
          onChange={handleFilter}
          className={css.input}
        />
      </label>
    </div>
  );
}
