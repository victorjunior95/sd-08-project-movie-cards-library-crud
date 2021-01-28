import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>{ children }</div>
    );
  }
}

Loading.defaultProps = {
  children: 'Carregando...',
};

Loading.propTypes = {
  children: PropTypes.string,
};

export default Loading;
