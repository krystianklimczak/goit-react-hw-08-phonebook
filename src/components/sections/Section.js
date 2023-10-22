// 'React.Component'
import React, { Component } from 'react'

// css modules
// import css from './App.module.css';

// proptypes
// import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    
    return (
      <div>
        <h2>{title}</h2>
        <div>
            {children}
        </div>
      </div>
    )
  }
}
