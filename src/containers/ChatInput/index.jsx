import React, { Component } from 'react';
import ChatInput from '../../components/ChatInput';

class ChatInputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (event) => {
    const { value } = event.target;
    this.setState({ message: value });
  };

  render() {
    return (
      <ChatInput
        handleMessageChange={this.handleMessageChange}
      />
    );
  }
}

export default ChatInputContainer;
