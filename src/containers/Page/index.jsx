import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { fetchCurrentUser } from '../../actions';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderChildren: false,
    };
  }

  componentDidMount() {
    if (this.props.secure) {
      this.props.fetchCurrentUser();
    }
  }

  componentDidUpdate() {
    if (!this.state.renderChildren && get(this.props, 'user.meta.success')) {
      this.setState({ renderChildren: true });
    }
  }

  render() {
    if (!this.props.secure) {
      return this.props.children;
    }
    return this.state.renderChildren ? this.props.children : null;
  }
}

Page.propTypes = {
  user: PropTypes.object.isRequired,
  secure: PropTypes.bool,
  fetchCurrentUser: PropTypes.func.isRequired,
};

Page.defaultProps = {
  secure: false,
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { fetchCurrentUser })(Page);
