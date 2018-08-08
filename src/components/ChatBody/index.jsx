import React from 'react';
import PropTypes from 'prop-types';
import ChatInput from '../../containers/ChatInput';
import Message from '../Message';
import './styles.scss';

const ChatBody = ({ setMessagesContainerRef }) => (
  <div className="chat-body">
    <div className="chat-body__main" ref={setMessagesContainerRef}>
      <div className="chat-body__message"><Message /></div>
    </div>
    <ChatInput />
  </div>
);

ChatBody.propTypes = {
  setMessagesContainerRef: PropTypes.func.isRequired,
};

export default ChatBody;
