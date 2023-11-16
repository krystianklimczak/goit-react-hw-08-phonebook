import contactsReducer from './contactSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: contactsReducer,
});
