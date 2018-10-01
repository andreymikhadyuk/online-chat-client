import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import ChatBody from 'components/ChatBody';
import { MESSAGES_DATA_SLICE_NAME, MESSAGES_META_SLICE_NAME } from '../../consts/sliceNames';
import { fetchMessages } from '../../actions';

class ChatBodyContainer extends Component {
  componentDidMount() {
    this.props.fetchMessages();
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
    const { messages } = this.props;

    return (
      <ChatBody
        setMessagesContainerRef={this.setMessagesContainerRef}
        messages={messages}
      />
    );
  }
}

ChatBodyContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  messagesMeta: PropTypes.object.isRequired,
  fetchMessages: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  messages: get(state, MESSAGES_DATA_SLICE_NAME),
  messagesMeta: get(state, MESSAGES_META_SLICE_NAME),
});

export default connect(mapStateToProps, { fetchMessages })(ChatBodyContainer);
