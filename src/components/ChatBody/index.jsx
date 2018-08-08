import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ChatBody = ({ setMessagesContainerRef }) => (
  <div className="chat-body">
    <div className="chat-body__main" ref={setMessagesContainerRef}>
      <h1>Chat Body</h1>
    </div>
    <section className="chat-input" />
  </div>
);

ChatBody.propTypes = {
  setMessagesContainerRef: PropTypes.func.isRequired,
};

export default ChatBody;
