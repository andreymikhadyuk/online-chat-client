import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Message = ({ user, text, isFromActiveUser }) => (
  <section className="message">
    <div className={classNames('message__meta', { message__meta_right: isFromActiveUser })}>
      <span className="message__user">{user.username}</span>
    </div>
    <div className={classNames('message__content', { message__content_right: isFromActiveUser })}>
      <span className={classNames('message__text', { message__text_right: isFromActiveUser })}>
        {text}
      </span>
    </div>
  </section>
);

Message.propTypes = {
  user: PropTypes.object,
  text: PropTypes.string,
  isFromActiveUser: PropTypes.bool,
};

Message.defaultProps = {
  user: {
    username: 'Anonymous',
  },
  text: 'Empty message',
  isFromActiveUser: false,
};

export default Message;
