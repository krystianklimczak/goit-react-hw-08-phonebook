import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App';
import { ContactsProvider } from 'hooks/ContactContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </React.StrictMode>
);
