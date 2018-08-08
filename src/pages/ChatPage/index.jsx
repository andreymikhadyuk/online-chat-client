import React from 'react';
import ChatBody from '../../containers/ChatBody';
import './styles.scss';

const ChatPage = () => (
  <div className="chat-page">
    <div className="chat-page__chat-body">
      <ChatBody />
    </div>
  </div>
);

export default ChatPage;
