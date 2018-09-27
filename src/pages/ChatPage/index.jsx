import React from 'react';
import Page from '../../containers/Page';
import ChatBody from '../../containers/ChatBody';
import './styles.scss';

const ChatPage = () => (
  <Page>
    <div className="chat-page">
      <div className="chat-page__chat-body">
        <ChatBody />
      </div>
    </div>
  </Page>
);

export default ChatPage;
