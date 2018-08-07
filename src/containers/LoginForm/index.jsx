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
  }

  render() {
    const props = {
      handleChange: this.handleChange,
    };

    return (
      <LoginForm {...props} />
    );
  }
}

export default LoginFormContainer;
