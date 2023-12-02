import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Form from 'components/form/Form';
import Filter from 'components/filter/Filter';
import Section from 'components/sections/Section';
import ContactsList from 'components/contactsList/ContactsList';

export default function Contacts() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Contacts</title>
        </Helmet>

        <Section title="Add Contact">
          <Form />
        </Section>

        <Section title="Contacts">
          <ContactsList>
            <Filter />
          </ContactsList>
        </Section>
      </div>
    </HelmetProvider>
  );
}
