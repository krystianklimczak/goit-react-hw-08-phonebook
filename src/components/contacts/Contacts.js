// 'React.Component'
import React, { Component } from 'react'

// library to generete unique id
import { nanoid } from 'nanoid'

// css modules
// import css from './App.module.css';

// proptypes
// import PropTypes from 'prop-types';

export default class Contacts extends Component {
  render() {
    const { contacts, children } = this.props;

    return (
        <div>
            {children}
            <ul>
                {contacts.map(contact => {
                    return (
                        <li key={nanoid()}>
                            <p>{contact.name}</p>
                            <p>{contact.number}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
  }
}
