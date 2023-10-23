// 'React.Component'
import React, { Component } from 'react'

// components
import Form from './form/Form'
import Section from './sections/Section'
import Contacts from './contacts/Contacts'
import Filter from './filter/Filter'

// external libraries
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix'

/// css modules
import css from './App.module.css';

export default class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  // change value of input handler
  handlerChange = ev => {
    const {name, value} = ev.target;
    this.setState({ [name]: value});
  }

  // submit form handler
  handlerSubmit = ev => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    // check if there is contact with that name / if yes, return 
    const allContacts = this.state.contacts;
    if (allContacts.find(contact => contact.name.toUpperCase() === name.toUpperCase())) {
      return Notiflix.Notify.failure(`Contact ${name} already exist on list`)
    }

    // generate new contact
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    }

    // update contacts list state
    this.setState({
      contacts: [...this.state.contacts, newContact],
      filter: ''
    })

    // reset form inputs
    form.reset();
  }

  // delete contact handler
  handlerDelete = (ev) => {
    const deletedContactId = ev.target.value;
    const updatedContacts = this.state.contacts.filter(contact => !(contact.id === deletedContactId));

    this.setState({
      contacts: [...updatedContacts]
    })
  }

  // render
  render() {
    // destructuring assignment
    const {name, number, filter, contacts} = this.state;

    // declatarion of filtered contacts of user input
    const filteredContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));

    return (
      <div className={css.container}>
        <h1 className={css.phoneBook}>Phonebook</h1>
        <div className={css.phoneBook__options}>
          <Section title="Add Contact">
            <Form name={name} number={number} onSubmit={this.handlerSubmit}/>
          </Section>
          
          <Section title="Contacts">
            <Contacts contacts={filteredContacts} handlerRemove={this.handlerDelete}>
              {contacts.length > 0 && <Filter filter={filter} onChange={this.handlerChange}/>}
            </Contacts>
          </Section>
        </div>
      </div>
    )
  }
}
