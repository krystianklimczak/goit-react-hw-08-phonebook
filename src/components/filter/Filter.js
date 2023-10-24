// 'React.Component'
import React, { Component } from 'react'

// css modules
import css from './Filter.module.css';

// proptypes
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className={css.filter}>
        <label className={css.label}>
            Find contacts by name
            <input
                type='text'
                name='filter'
                value={filter}
                onChange={onChange}
                className={css.input}
            />
        </label>
      </div>
    )
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}