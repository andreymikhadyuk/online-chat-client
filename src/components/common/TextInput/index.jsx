import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextInput = ({ label, ...restProps }) => (
  <div className="text-input">
    { label && <span className="text-input__label">{label}</span> }
    <input
      className="text-input__input"
      {...restProps}
    />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  name: '',
};

export default TextInput;
