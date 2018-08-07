import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from '../common';
import './styles.scss';

const LoginForm = ({ handleChange }) => {
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
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
