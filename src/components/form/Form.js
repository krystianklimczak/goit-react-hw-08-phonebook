// 'React.Component'
import React, { Component } from 'react'

// css modules
import css from './Form.module.css';

// proptypes
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { name, number, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
            Name
            <input
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                className={css.input}
            />
        </label>
        <label className={css.label}>
            Number
            <input
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                className={css.input}
            />
        </label>
        <button type='submit' className={css.btn}>
            Add contact
        </button>
      </form>
    )
  }
}

// proptypes of form component
Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string, 
  onSubmit: PropTypes.func.isRequired
}