import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatBody from '../../components/ChatBody';

class ChatBodyContainer extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  setMessagesContainerRef = (element) => {
    this.messagesContainerElement = element;
  };

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.messagesContainerElement;
    const scrollTop = scrollHeight - clientHeight;
    ReactDOM.findDOMNode(this.messagesContainerElement).scrollTop = scrollTop > 0 ? scrollTop : 0;
  };

  render() {
    return (
      <ChatBody
        setMessagesContainerRef={this.setMessagesContainerRef}
      />
    );
  }
}

export default ChatBodyContainer;
