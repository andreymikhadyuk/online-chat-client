import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  componentDidMount() {
    if (this.props.secure) {
      // Make checks
    }
  }

  render() {
    return this.props.children;
  }
}

Page.propTypes = {
  secure: PropTypes.bool,
};

Page.defaultProps = {
  secure: true,
};

export default Page;
