// 'React.Component'
import React, { Component } from 'react'

// components
import Form from './form/Form'
import Section from './sections/Section'
import Contacts from './contacts/Contacts'
import Filter from './filter/Filter'

// library to generete unique id
import { nanoid } from 'nanoid'

/// css modules
// import css from './App.module.css';

// initial values of app state
const initialValues = {
  name: '',
  number: '',
  filter: '',
}

export default class App extends Component {
  // set start state
  state = {...initialValues, contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]};

  // change value of input handler
  handlerChange = ev => {
    const {name, value} = ev.target;
    this.setState({ [name]: value});
  }

  // handlerFilter = ev => {
  //   const {name, value} = ev.target;
  //   this.setState({ [name]: value });
  //   const prevState = this.state;
  //   console.log(prevState);
  //   this.setState({
  //     contacts: [...(prevState.contacts.filter(contact => contact.name.toUpperCase().includes(value.toUpperCase())))]
  //   })
  // }

  // submit form handler
  handlerSubmit = ev => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    }

    this.setState({
      contacts: [...this.state.contacts, newContact]
    })

    this.reset();
  }

  // reset form handler
  reset = () => {
    this.setState(initialValues);
  }

  // render
  render() {
    // destructuring assignment
    const {name, number, filter, contacts} = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));

    return (
      <div>
        <h1>Phonebook</h1>

        <Section title="Add Contact">
          <Form name={name} number={number} onChange={this.handlerChange} onSubmit={this.handlerSubmit}/>
        </Section>
        
        <Section title="Contacts">
          <Contacts contacts={filteredContacts}>
            <Filter filter={filter} onChange={this.handlerChange}/>
          </Contacts>
        </Section>
      </div>
    )
  }
}
