import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from '../common';
import './styles.scss';

const LoginForm = ({ isLoading, handleChange, handleSubmit }) => {
  const newProps = {
    username: {
      label: 'Username',
      placeholder: 'Enter username...',
      name: 'username',
      onChange: handleChange,
    },
    password: {
      label: 'Password',
      placeholder: 'Enter password...',
      type: 'password',
      name: 'password',
      onChange: handleChange,
    },
    signIn: {
      text: 'Sign in',
      onClick: handleSubmit,
      disabled: isLoading,
    },
  };
  return (
    <section className="login-form">
      <div className="login-form__text-input"><TextInput {...newProps.username} /></div>
      <div className="login-form__text-input"><TextInput {...newProps.password} /></div>
      <Button {...newProps.signIn} />
    </section>
  );
};

LoginForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
