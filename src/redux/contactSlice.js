import { createSlice } from '@reduxjs/toolkit';

import Notiflix from 'notiflix';

export const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      if (
        state.contacts.find(
          contact =>
            contact.name.toUpperCase() === action.payload.name.toUpperCase()
        )
      ) {
        return Notiflix.Notify.failure(
          `Contact ${action.payload.name} already exist on list`
        );
      } else {
        state.contacts = [...state.contacts, action.payload];
      }
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
    resetContacts: state => {
      state.contacts = [...initialState.contacts];
    },
    localStorageCheck: (state, action) => {
      state.contacts = [...action.payload];
    },
  },
});

export const {
  addContact,
  removeContact,
  filterContacts,
  resetContacts,
  localStorageCheck,
} = contactSlice.actions;
export default contactSlice.reducer;
