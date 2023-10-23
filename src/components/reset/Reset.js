// 'React.Component'
import React, { Component } from 'react'

/// css modules
import css from './Reset.module.css';

export default class Reset extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={css.reset}>
        <button className={css.reset__btn} type='button' onClick={onClick}>Reset</button>
      </div>
    )
  }
}
