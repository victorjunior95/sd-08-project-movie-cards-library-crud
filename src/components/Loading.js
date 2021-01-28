import React, { Component } from 'react';
import LoadingGif from './img-components/loading.gif';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={ LoadingGif } alt="Loading" />
        <span>Carregando...</span>
      </div>
    );
  }
}

export default Loading;
