import React from 'react';
import { Fire } from 'react-bootstrap-icons';

import css from './Info.module.css';

export default function Info() {
  return (
    <div className={css.info}>
      <h1>"TeleContacts: Connecting People in the Digital Era"</h1>
      <p>
        Today, I want to present to you an innovative project that revolutionizes the traditional
        concept of a phone book. "TeleContacts" is our response to the contemporary challenges of
        communication and community building, allowing users to create accounts, add contacts, and
        easily search by name.
      </p>
      <h2>Why TeleContacts?</h2>
      <ol className={css.list}>
        <li className={css.item}>
          <h3>
            <Fire /> Manage Your Contacts
          </h3>{' '}
          <br></br>
          TeleContacts allows users to create accounts, enabling them to store and manage their
          contacts in one place.
        </li>
        <li className={css.item}>
          <h3>
            <Fire /> Name-Based Searching
          </h3>{' '}
          <br></br>
          Advanced search features enable users to quickly find specific contacts by name, making
          navigation in the phone book simpler and more efficient.
        </li>
        <li className={css.item}>
          <h3>
            <Fire /> Security and Privacy
          </h3>{' '}
          <br></br>
          We prioritize data security. TeleContacts has implemented the latest security standards,
          safeguarding users privacy and information from any threats.
        </li>
        <li className={css.item}>
          <h3>
            <Fire /> Eco-Friendly
          </h3>{' '}
          <br></br>
          Our project supports sustainable development. We've abandoned the paper version in favor
          of a digital one, reducing our impact on the environment.
        </li>
      </ol>
      <h2>How Does It Work?</h2>
      <ol className={css.list}>
        <li className={css.item}>
          <h3>
            <Fire /> Create, Add, and Remove Contacts
          </h3>{' '}
          <br></br>A user-friendly interface allows users to easily create accounts, remove, and add
          new contacts.
        </li>
        <li className={css.item}>
          <h3>
            <Fire /> Global Infrastructure
          </h3>{' '}
          <br></br>
          Thanks to an advanced server infrastructure, access to the phone book is fast and
          reliable, regardless of the location.
        </li>
        <li className={css.item}>
          <h3>
            <Fire /> Simple Usage
          </h3>{' '}
          <br></br>
          The user interface is designed to be intuitive, even for those who are not tech-savvy.
        </li>
        <li className={css.item}>
          <h3>
            <Fire /> Intuitive Searching
          </h3>{' '}
          <br></br>
          Advanced search features enable quick finding of specific contacts by name.
        </li>
      </ol>
      <h2>Summary</h2>
      <p>
        <b>"TeleContacts"</b> is not just a tool but also a symbol of a modern, personalized
        community. With easy account creation, contact addition, and intuitive search features, we
        take steps toward the future of communication. Join our journey, connecting people in the
        digital era!
      </p>
    </div>
  );
}
