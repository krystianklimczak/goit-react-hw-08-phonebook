import Form from './form/Form';
import Reset from './reset/Reset';
import Filter from './filter/Filter';
import Section from './sections/Section';
import Contacts from './contacts/Contacts';

import { useEffect } from 'react';
import { initialState } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageCheck } from 'redux/contactSlice';

import css from './App.module.css';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const json = localStorage.getItem('contacts');

    if (JSON.parse(json) === null) {
      const json = JSON.stringify(initialState.contacts);
      localStorage.setItem('contacts', json);
    }
  }, []);

  useEffect(() => {
    const json = localStorage.getItem('contacts');
    const localContacts = JSON.parse(json);

    if (JSON.parse(json) !== null) {
      dispatch(localStorageCheck(localContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    if (contacts !== initialState.contacts) {
      const json = JSON.stringify(contacts);
      localStorage.setItem('contacts', json);
    }
  }, [contacts]);

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
