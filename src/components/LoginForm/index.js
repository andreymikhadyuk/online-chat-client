import React from 'react';
import { TextInput, Button } from '../common';
import './styles.scss';

const LoginForm = () => {
  const newProps = {
    username: {
      label: 'Username',
      placeholder: 'Enter username...',
    },
    password: {
      label: 'Password',
      placeholder: 'Enter password...',
      type: 'password',
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

export default LoginForm;
