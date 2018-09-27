import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { login } from '../../actions';

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
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  render() {
    const props = {
      isLoading: this.props.isLoading,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    };

    return (
      <LoginForm {...props} />
    );
  }
}

LoginFormContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
});

export default connect(mapStateToProps, { login })(LoginFormContainer);
