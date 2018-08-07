import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, type }) => (
  <button className="button" type={type}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
