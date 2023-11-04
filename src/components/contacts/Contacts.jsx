import { nanoid } from 'nanoid';

import { useContacts } from 'hooks/ContactContext';

import css from './Contacts.module.css';

export default function Contacts({ children }) {
  const { filteredContacts, handleDelete } = useContacts();

  return (
    <div className={css.contacts}>
      {children}
      <ul className={css.list}>
        {filteredContacts.map(contact => {
          return (
            <li key={nanoid()} className={css.item}>
              <p className={css.text}>{contact.name}</p>
              <p className={css.text}>{contact.number}</p>
              <button
                className={css.btn}
                type="button"
                onClick={handleDelete}
                value={contact.id}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
