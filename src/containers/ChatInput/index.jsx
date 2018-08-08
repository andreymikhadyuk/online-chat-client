import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions';
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

  handleSubmit = () => {
    const { message } = this.state;
    if (message) {
      this.props.sendMessage({ text: message });
      this.setState({ message: '' });
    }
  };

  render() {
    const { message } = this.state;
    return (
      <ChatInput
        messageText={message}
        handleMessageChange={this.handleMessageChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

ChatInputContainer.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default connect(null, { sendMessage })(ChatInputContainer);
