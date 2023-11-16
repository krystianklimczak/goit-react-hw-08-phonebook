import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';

import css from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();

  const handleSumbite = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(
      addContact({
        id: nanoid(),
        name: name,
        number: number,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSumbite} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
