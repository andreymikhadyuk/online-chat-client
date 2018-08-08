import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextArea = props => (
  <textarea
    className="text-area"
    rows={2}
    {...props}
  />
);

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  placeholder: '',
};

export default TextArea;
