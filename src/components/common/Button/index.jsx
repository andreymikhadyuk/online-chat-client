import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ text, ...restProps }) => {
  const props = {
    className: classNames('button', { button_disabled: restProps.disabled }),
    ...restProps,
  };

  return (
    <button {...props}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
