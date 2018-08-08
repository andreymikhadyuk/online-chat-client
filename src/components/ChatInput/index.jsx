import React from 'react';
import PropTypes from 'prop-types';
import { TextArea, Button } from '../common';
import './styles.scss';

const ChatInput = ({ messageText, handleMessageChange, handleSubmit }) => (
  <section className="chat-input">
    <TextArea
      value={messageText}
      placeholder="Write a message..."
      onChange={handleMessageChange}
    />
    <div className="chat-input__submit">
      <Button
        text="Submit"
        onClick={handleSubmit}
      />
    </div>
  </section>
);

ChatInput.propTypes = {
  messageText: PropTypes.string,
  handleMessageChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

ChatInput.defaultProps = {
  messageText: '',
};

export default ChatInput;
