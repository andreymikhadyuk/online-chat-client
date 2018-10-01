import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
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
    const { message = '' } = this.state;
    const messageForSave = message.trim();
    if (messageForSave) {
      this.props.sendMessage({ text: messageForSave, createdAt: moment().valueOf() });
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
