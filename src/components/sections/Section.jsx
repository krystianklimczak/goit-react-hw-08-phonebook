import PropTypes from 'prop-types';
import React, { Component } from 'react';

import css from './Section.module.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className={css.section}>
        <h2 className={css.section__title}>{title}</h2>
        <div>{children}</div>
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
