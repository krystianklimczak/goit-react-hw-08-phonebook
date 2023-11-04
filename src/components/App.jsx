import Form from './form/Form';
import Reset from './reset/Reset';
import Filter from './filter/Filter';
import Section from './sections/Section';
import Contacts from './contacts/Contacts';
import { useContacts } from 'hooks/ContactContext';

import css from './App.module.css';

export default function App() {
  const { contacts } = useContacts();

  return (
    <div className={css.container}>
      <h1 className={css.phoneBook}>Phonebook</h1>
      <div className={css.phoneBook__options}>
        <Section title="Add Contact">
          <Form />
        </Section>

        <Section title="Contacts">
          <Contacts>{contacts.length > 0 ? <Filter /> : <Reset />}</Contacts>
        </Section>
      </div>
    </div>
  );
}
