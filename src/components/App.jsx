// 'React.Component'
import React, { Component } from 'react'

// components
import Form from './form/Form'
import Section from './sections/Section'
import Contacts from './contacts/Contacts'
import Filter from './filter/Filter'
import Reset from './reset/Reset'

// external libraries
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix'

/// css modules
import css from './App.module.css';

// initial contact list
const initialContacts = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
}
export default class App extends Component {

  state = {
    ...initialContacts,
    filter: ''
  };

  handlerChange = ev => {
    const {name, value} = ev.target;
    this.setState({ [name]: value});
  }

  handlerSubmit = ev => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
 
    const allContacts = this.state.contacts;
    if (allContacts.find(contact => contact.name.toUpperCase() === name.toUpperCase())) {
      return Notiflix.Notify.failure(`Contact ${name} already exist on list`)
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    }

    this.setState({
      contacts: [...this.state.contacts, newContact],
      filter: ''
    })

    form.reset();
  }

  handlerDelete = (ev) => {
    const deletedContactId = ev.target.value;
    const updatedContacts = this.state.contacts.filter(contact => !(contact.id === deletedContactId));

    this.setState({
      contacts: [...updatedContacts]
    })
  }

  handlerReset = () => {
    this.setState({
      ...initialContacts
    })
  }

  componentDidMount() {
    const json = localStorage.getItem('contacts');
    
    if (!json) {
      const json = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', json);
    }

    const contacts = JSON.parse(json)
    
    this.setState(() => ({contacts}));
  }

  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.contacts)
    localStorage.setItem('contacts', json);
  }

  render() {
    const {filter, contacts} = this.state;

    const filteredContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));

    return (
      <div className={css.container}>
        <h1 className={css.phoneBook}>Phonebook</h1>
        <div className={css.phoneBook__options}>
          <Section title="Add Contact">
            <Form onSubmit={this.handlerSubmit}/>
          </Section>
          
          <Section title="Contacts">
            <Contacts contacts={filteredContacts} handlerRemove={this.handlerDelete}>
              {contacts.length > 0 ? <Filter filter={filter} onChange={this.handlerChange}/> : <Reset onClick={this.handlerReset}/>}
            </Contacts>
          </Section>
        </div>
      </div>
    )
  }
}
