import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, ...restProps }) => (
  <button className="button" {...restProps}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
