import React from 'react';
import PropTypes from 'prop-types';
import ChatInput from '../../containers/ChatInput';
import Message from '../Message';
import './styles.scss';

const ChatBody = ({ messages, setMessagesContainerRef }) => (
  <div className="chat-body">
    <div className="chat-body__main" ref={setMessagesContainerRef}>
      { messages && messages.map((message, index) => (
        <div key={index} className="chat-body__message"><Message {...message} /></div>
      ))}
    </div>
    <ChatInput />
  </div>
);

ChatBody.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessagesContainerRef: PropTypes.func.isRequired,
};

export default ChatBody;
