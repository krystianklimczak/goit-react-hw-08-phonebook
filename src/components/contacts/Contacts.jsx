import { useSelector } from 'react-redux';

import Contact from 'components/contact/Contact';
import { getContacts, getFilter } from 'redux/selectors';

import css from './Contacts.module.css';
import PropTypes from 'prop-types';

export default function Contacts({ children }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContactsList = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div className={css.contacts}>
      {children}
      <ul className={css.list}>
        {filteredContactsList.map(contact => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  children: PropTypes.element,
};
