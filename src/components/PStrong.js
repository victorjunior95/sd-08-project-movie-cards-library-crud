import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PStrong extends Component {
  render() {
    const { title, descrip } = this.props;
    return (
      <p>
        <strong>{ title }</strong>
        { descrip }
      </p>
    );
  }
}

PStrong.propTypes = {
  title: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired,
};

export default PStrong;
