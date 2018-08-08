import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../common/TextArea';
import './styles.scss';

const ChatInput = ({ handleMessageChange }) => (
  <section className="chat-input">
    <TextArea
      placeholder="Write a message..."
      onChange={handleMessageChange}
    />
  </section>
);

ChatInput.propTypes = {
  handleMessageChange: PropTypes.func.isRequired,
};

export default ChatInput;
