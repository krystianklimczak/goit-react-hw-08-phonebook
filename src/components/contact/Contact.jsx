import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';

import PropTypes from 'prop-types';

import css from './Contact.module.css';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = ev => {
    const id = ev.target.value;
    dispatch(removeContact(id));
  };

  return (
    <li className={css.item}>
      <p className={css.text}>{name}</p>
      <p className={css.text}>{number}</p>
      <button
        className={css.btn}
        type="button"
        onClick={handleDelete}
        value={id}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
