// 'React.Component'
import React, { Component } from 'react'

// library to generete unique id
import { nanoid } from 'nanoid'

// css modules
import css from './Contacts.module.css';

// proptypes
import PropTypes from 'prop-types';

export default class Contacts extends Component {
  render() {
    const { contacts, children, handlerRemove } = this.props;

    return (
        <div className={css.contacts}>
            {children}
            <ul className={css.list}>
                {contacts.map(contact => {
                    return (
                        <li key={nanoid()} className={css.item}>
                            <p className={css.text}>{contact.name}</p>
                            <p className={css.text}>{contact.number}</p>
                            <button className={css.btn} type='button' onClick={handlerRemove} value={contact.id}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
  }
}

// proptypes of contacts component
Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    handlerRemove: PropTypes.func.isRequired
}