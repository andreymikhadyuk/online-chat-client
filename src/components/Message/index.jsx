import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Message = ({ user, text }) => (
  <section className="message">
    <div className="message__meta">
      <span className="message__user">{user}</span>
    </div>
    <div className="message__content">
      <span className="message__text">{text}</span>
    </div>
  </section>
);

Message.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
};

Message.defaultProps = {
  user: 'Anonymous',
  text: 'Empty message',
};

export default Message;
