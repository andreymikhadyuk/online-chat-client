import React from 'react';
import PropTypes from 'prop-types';
import ChatInput from '../../containers/ChatInput';
import './styles.scss';

const ChatBody = ({ setMessagesContainerRef }) => (
  <div className="chat-body">
    <div className="chat-body__main" ref={setMessagesContainerRef}>
      <h1>Chat Body</h1>
    </div>
    <ChatInput />
  </div>
);

ChatBody.propTypes = {
  setMessagesContainerRef: PropTypes.func.isRequired,
};

export default ChatBody;
