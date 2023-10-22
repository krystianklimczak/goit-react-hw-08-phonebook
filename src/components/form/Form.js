// 'React.Component'
import React, { Component } from 'react'

// css modules
// import css from './App.module.css';

// proptypes
// import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { name, number, onChange, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <label>
            Name
            <input
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={onChange}
            />
        </label>
        <label>
            Number
            <input
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={onChange}
            />
        </label>
        <button type='submit'>
            Add contact
        </button>
      </form>
    )
  }
}
