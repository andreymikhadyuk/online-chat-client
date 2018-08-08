import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log('handleSubmit');
  };

  render() {
    const props = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    };

    return (
      <LoginForm {...props} />
    );
  }
}

export default LoginFormContainer;
