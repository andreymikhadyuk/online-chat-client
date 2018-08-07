import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextInput = ({ label, placeholder, type }) => (
  <div className="text-input">
    { label && <span className="text-input__label">{label}</span> }
    <input
      className="text-input__input"
      placeholder={placeholder}
      type={type}
    />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
};

TextInput.defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
};

export default TextInput;
